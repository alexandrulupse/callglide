import { reduce } from 'lodash-es';
import { SIZE_MEDIUM } from '../../core/styles';

const mapper = (properties, map, defaultValue = SIZE_MEDIUM) =>
  reduce((properties || defaultValue).split(' '), (result, property) => `${result} ${map[property]} `, '').trim();

export default mapper;
