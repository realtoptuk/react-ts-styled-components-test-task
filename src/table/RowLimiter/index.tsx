import * as React from 'react';
import { StyledSelect } from '../styled';

interface IRowLimiter {
  pageLimit: number;
  changePageLimit: (limit: number) => void;
}

const RowLimiter: React.FC<IRowLimiter> = ({ pageLimit, changePageLimit }) => {
  return (
    <StyledSelect>
      <select
        name="pageLimit"
        value={pageLimit}
        onChange={e => changePageLimit(parseInt(e.target.value, 10))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </StyledSelect>
  );
};

export default React.memo(RowLimiter);
