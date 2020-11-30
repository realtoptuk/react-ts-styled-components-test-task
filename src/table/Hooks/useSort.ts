import { useState } from 'react';

import { SortOrder } from '../';

const DEFAULT_SORT = {
  key: '',
  direction: '',
};

export const useSort = (
  defaultSort = DEFAULT_SORT
): [
  { key: string; direction: string },
  (key: string, previousDirection: string) => void
] => {
  const [sort, setSort] = useState<{
    key: string;
    direction: string;
  }>(defaultSort);

  const onSort = (key: string, previousDirection: string): void => {
    const newSort: {
      key: string;
      direction: string;
    } = {
      key: sort.key,
      direction: '',
    };

    if (sort.key !== key) {
      newSort.key = key;
      newSort.direction = SortOrder.ASC;

      return setSort(newSort);
    }

    if (sort.direction === previousDirection) {
      if (previousDirection === SortOrder.DESC)
        newSort.direction = SortOrder.NONE;
      else
        newSort.direction =
          previousDirection === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
    }

    setSort(newSort);
  };

  return [sort, onSort];
};
