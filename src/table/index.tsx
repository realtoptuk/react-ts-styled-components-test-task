import * as React from 'react';
import { StyledTable, FlexContainer } from './styled';
import StyledTHead from './THead/Thead';
import StyledTh from './THead/Th';
import Td from './Td/index';
import Search from './Search';
import RowLimiter from './RowLimiter';
import Pagination from './Pagination';
import { orderBy } from './Utils';
import { useSort } from './Hooks/useSort';
import { usePagination } from './Hooks/usePagination';

export type IValue = any;

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
  NONE = 'none',
}

export interface IColumn {
  key: string;
  title: string;
  render?: (value: IValue) => IValue;
}

interface IProps {
  columns: IColumn[];
  data: { [key: string]: IValue }[];
}

export const Table = React.memo((props: IProps) => {
  const [localColumns, setLocalColumns] = React.useState(() => props.columns);
  const [sort, onSort] = useSort();
  const [search, setSearch] = React.useState<string>('');
  const [pageLimit, setPageLimit] = React.useState<number>(10);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    setLocalColumns(props.columns);
  }, [props.columns]);

  const _localData = React.useMemo(() => {
    const { key, direction } = sort;
    let data = [];
    if (!key || !direction || direction === SortOrder.NONE) {
      data = [...props.data];
    } else {
      data = orderBy(props.data, [key], [direction]);
    }

    if (!search) return data;

    return data.filter(d => {
      return Object.keys(d).some(key =>
        d[key]
          .toString()
          .toLowerCase()
          .includes(search)
      );
    });
  }, [search, sort, props.data]);

  const localData = usePagination(_localData, activePage, pageLimit);

  const setPagination = React.useCallback(pageNumber => {
    setActivePage(pageNumber);
  }, []);

  const onSearch = React.useCallback((value: string) => {
    setSearch(value);
  }, []);

  const onChangePageLimit = React.useCallback(limit => {
    setPageLimit(limit);
  }, []);

  return (
    <div>
      <FlexContainer>
        <Search onSearch={onSearch} />
        <RowLimiter pageLimit={pageLimit} changePageLimit={onChangePageLimit} />
      </FlexContainer>
      <StyledTable>
        <StyledTHead>
          <tr>
            {localColumns.map(column => (
              <StyledTh
                key={`th-${column.key}`}
                columnKey={column.key}
                onSort={onSort}
                sort={sort}
              >
                {column.title}
              </StyledTh>
            ))}
          </tr>
        </StyledTHead>
        <tbody>
          {localData.map((item, index) => (
            <tr key={index}>
              {props.columns.map(column => (
                <Td key={`td-${column.key}`} search={search}>
                  {column.render
                    ? column.render(item[column.key])
                    : item[column.key]}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Pagination
        total={_localData.length}
        perPage={pageLimit}
        activePage={activePage}
        cb={setPagination}
      />
    </div>
  );
});
