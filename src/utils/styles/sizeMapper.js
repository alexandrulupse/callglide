import {
  SIZE_AUTO,
  SIZE_NO,
  SIZE_XX_SMALL,
  SIZE_X_SMALL,
  SIZE_SMALL,
  SIZE_S_MEDIUM,
  SIZE_MEDIUM,
  SIZE_L_MEDIUM,
  SIZE_LARGE,
  SIZE_X_LARGE,
  SIZE_XX_LARGE,
  SIZE_GRANDE,
  SIZE_X_GRANDE,
  SIZE_XX_GRANDE,
} from '../../core/styles';

import mapper from './mapper';

const SIZE_MAP = {
  [SIZE_AUTO]: 'auto',
  [SIZE_NO]: '0',
  [SIZE_XX_SMALL]: '5px',
  [SIZE_X_SMALL]: '10px',
  [SIZE_SMALL]: '15px',
  [SIZE_S_MEDIUM]: '20px',
  [SIZE_MEDIUM]: '30px',
  [SIZE_L_MEDIUM]: '40px',
  [SIZE_LARGE]: '45px',
  [SIZE_X_LARGE]: '60px',
  [SIZE_XX_LARGE]: '90px',
  [SIZE_GRANDE]: '120px',
  [SIZE_X_GRANDE]: '150px',
  [SIZE_XX_GRANDE]: '180px',
};

const sizeMapper = (size, defaultSize = SIZE_MEDIUM) => mapper(size, SIZE_MAP, defaultSize);

export default sizeMapper;
