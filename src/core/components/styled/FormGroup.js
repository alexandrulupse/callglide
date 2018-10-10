import styled, { css } from 'styled-components';
import FormLabel from './FormLabel';
import { loading } from '../../styles';
import { sizeMapper } from '../../../utils/styles';

const FormGroup = styled.div`
  margin: ${props => sizeMapper(props.margin, 'no no sMedium')};

  ${props =>
    props.isLoading &&
    css`
      &:after {
        content: '';
        position: absolute;
        top: 22px;
        right: 0;
        ${loading('20px')};
      }
    `};

  ${props =>
    props.hasValue &&
    css`
      ${FormLabel} {
        font-size: 12px;
        transform: none;
      }
    `};

  ${FormLabel} {
    transition: transform 0.2s, font-size 0.2s;
  }
`;

export default FormGroup;
