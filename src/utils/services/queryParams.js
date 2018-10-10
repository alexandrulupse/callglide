import { parse, stringify } from 'qs';
import { pickBy, assign } from 'lodash-es';
import isFalsy from './isFalsy';

export const getQueryParams = queryString => parse(queryString, { ignoreQueryPrefix: true });
export const setQueryParams = (queryString, params) =>
  stringify(pickBy(assign(getQueryParams(queryString), params), value => !isFalsy(value, { allowZero: true })), {
    addQueryPrefix: true,
    encode: false,
  });

export const createUrl = (urlPath, queryString, params) => `${urlPath}${setQueryParams(queryString, params)}`;
