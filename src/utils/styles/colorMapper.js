import {
  COLOR_DEFAULT,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_INFO,
  COLOR_WARNING,
  COLOR_ALERT,
} from '../../core/styles';

const COLOR_MAP = {
  [COLOR_DEFAULT]: 'brandDefault',
  [COLOR_PRIMARY]: 'brandPrimary',
  [COLOR_SECONDARY]: 'brandSecondary',
  [COLOR_SUCCESS]: 'brandSuccess',
  [COLOR_INFO]: 'brandInfo',
  [COLOR_WARNING]: 'brandWarning',
  [COLOR_ALERT]: 'brandAlert',
};

const colorMapper = (props, defaultColor = COLOR_DEFAULT) => props.theme[COLOR_MAP[props.color || defaultColor]];

export default colorMapper;
