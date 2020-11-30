import { useMemo } from 'react';

export function usePagination<T>(
  data: Array<T>,
  activePage: number,
  pageLimit: number
): Array<T> {
  const localData = useMemo(() => {
    return data.slice(
      activePage * pageLimit - pageLimit,
      activePage * pageLimit
    );
  }, [data, activePage, pageLimit]);

  return localData;
}
