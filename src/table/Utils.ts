import * as lodash from 'lodash';

export const orderBy = (data: any, iterator: string[], order: any[]) => {
  return lodash.orderBy(data, iterator, order);
};
