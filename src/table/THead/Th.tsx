import * as React from 'react';
import { StyledTh } from '../styled';
import { SortOrder } from '../';

interface ITh {
  columnKey: string;
  onSort: (key: string, previousDirection: string) => void;
  sort: { key: string; direction: string };
}

const Th: React.FC<ITh> = React.memo(
  ({ children, columnKey, onSort, sort }) => {
    const sortArrow = React.useCallback(() => {
      if (sort.key !== columnKey) {
        return null;
      }
      switch (sort.direction) {
        case SortOrder.ASC:
          return ' 🔽';
        case SortOrder.DESC:
          return ' 🔼';
        default:
          return null;
      }
    }, [sort, columnKey]);

    return (
      <StyledTh
        onClick={() =>
          onSort(
            columnKey,
            sort.key === columnKey ? sort.direction : SortOrder.NONE
          )
        }
      >
        {children}
        <span>{sortArrow()}</span>
      </StyledTh>
    );
  }
);

export default Th;
