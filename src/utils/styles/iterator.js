import { range, reduce } from 'lodash-es';

const iterator = (steps, template) => reduce(range(steps), (css, step) => css.concat(template(step)), '');

export default iterator;
