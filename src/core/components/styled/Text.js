import styled, { css } from 'styled-components';
import { mapper, sizeMapper, colorMapper } from '../../../utils/styles';

const Text = styled.span`
  margin: ${props => sizeMapper(props.margin, 'no')};
  font-size: ${props => mapper(props.size, { small: '12px', medium: '14px', large: '16px' })};

  ${props =>
    props.block &&
    css`
      display: block;
    `};

  ${props =>
    props.weight &&
    css`
      font-weight: ${props => mapper(props.weight, { light: 300, normal: 400, medium: 500 })};
    `};

  ${props =>
    props.align &&
    css`
      text-align: ${props => mapper(props.align, { left: 'left', center: 'center', right: 'right' }, 'left')};
    `};

  ${props =>
    props.singleLine &&
    css`
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};

  ${props =>
    props.color &&
    css`
      color: ${colorMapper(props)};
    `};
`;

export default Text;
