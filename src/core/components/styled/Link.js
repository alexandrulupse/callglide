import styled, { css } from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';
import { mapper, sizeMapper, colorMapper } from '../../../utils/styles';

const Link = styled(LinkComponent)`
  margin: ${props => sizeMapper(props.margin, 'no')};
  text-decoration: underline;
  font-weight: ${props => mapper(props.weight, { light: 300, normal: 400, medium: 500 }, 'normal')};
  font-size: ${props =>
    mapper(props.size, { inherit: 'inherit', small: '12px', medium: '14px', large: '16px' }, 'inherit')};

  ${props =>
    props.block &&
    css`
      display: block;
    `};

  ${props =>
    props.color &&
    css`
      color: ${colorMapper(props)};
    `};
`;

export default Link;
