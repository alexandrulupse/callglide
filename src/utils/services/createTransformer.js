import { get, pick, pickBy, omit, map, mapKeys, mapValues, filter, orderBy } from 'lodash-es';

class Transformer {
  constructor(value) {
    this.value = value;
  }

  apply = (func, ...args) => new Transformer(this.value && func(this.value, ...args));
  transform = (func, ...args) => this.apply(func, ...args);
  get = (...args) => this.apply(get, ...args);
  pick = (...args) => this.apply(pick, ...args);
  pickBy = (...args) => this.apply(pickBy, ...args);
  omit = (...args) => this.apply(omit, ...args);
  map = (...args) => this.apply(map, ...args);
  mapKeys = (...args) => this.apply(mapKeys, ...args);
  mapValues = (...args) => this.apply(mapValues, ...args);
  filter = (...args) => this.apply(filter, ...args);
  orderBy = (...args) => this.apply(orderBy, ...args);
}

const createTransformer = value => new Transformer(value);

export default createTransformer;
