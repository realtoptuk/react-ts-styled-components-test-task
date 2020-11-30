import * as React from 'react';
import PaginationLib from 'react-js-pagination';
import './pagination.css';

interface IPagination {
  perPage: number;
  total: number;
  cb?: any;
  activePage: number;
}

const Pagination: React.FC<IPagination> = ({
  perPage,
  total,
  activePage,
  cb,
}) => {
  const handlePageChange = React.useCallback(
    pageNumber => {
      cb(pageNumber);
    },
    [cb]
  );

  return (
    <div>
      <PaginationLib
        activePage={activePage}
        itemsCountPerPage={perPage}
        totalItemsCount={total}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="pagination-item"
      />
    </div>
  );
};

export default React.memo(Pagination);
