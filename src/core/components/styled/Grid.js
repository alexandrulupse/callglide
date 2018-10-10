import styled, { css } from 'styled-components';
import { mapper, sizeMapper } from '../../../utils/styles';

export const COLUMN_SIZES = {
  '1/12': '8.33%',
  '2/12': '16.66%',
  '3/12': '25%',
  '4/12': '33.33%',
  '5/12': '41.66%',
  '6/12': '50%',
  '7/12': '58.33%',
  '8/12': '66.66%',
  '9/12': '75%',
  '10/12': '83.33%',
  '11/12': '91.66%',
  '12/12': '100%',
};

export const GridColumn = styled.div`
  position: relative;
  text-align: ${props => mapper(props.align, { left: 'left', center: 'center', right: 'right' }, 'left')};
  padding: ${props => sizeMapper(props.padding, 'no xSmall')};

  ${props =>
    props.size &&
    css`
      width: ${props => mapper(props.size, COLUMN_SIZES)};
    `};

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${props =>
    props.shift &&
    css`
      margin-left: ${props => mapper(props.shift, COLUMN_SIZES)};
    `};
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  margin: ${props => sizeMapper(props.margin, 'no')};

  ${props =>
    props.centered &&
    css`
      justify-content: center;
    `};

  ${props =>
    props.multiLine &&
    css`
      flex-wrap: wrap;
    `};
`;
