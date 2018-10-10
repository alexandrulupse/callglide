import styled from 'styled-components';
import { mapper } from '../../../utils/styles';

const SimpleInput = styled.input`
  width: 100%;
  padding: 2px 2px 2px 0;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 0;
  line-height: 22px;
  font-size: ${props => mapper(props.size, { small: '12px', medium: '14px' })};

  &:disabled {
    color: ${props => props.theme.grayDark};
  }

  &::placeholder {
    color: ${props => props.theme.grayDark};
  }
`;

export default SimpleInput;
