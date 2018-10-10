import moment from 'moment-timezone';
import momentDurationFormatSetup from 'moment-duration-format';
import promisePrototypeFinallyShim from 'promise.prototype.finally';
import 'mdn-polyfills/String.prototype.startsWith';

const initialize = () => {
  momentDurationFormatSetup(moment);
  promisePrototypeFinallyShim.shim();
};

export default initialize;
