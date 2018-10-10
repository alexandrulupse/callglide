import styled from 'styled-components';
import { sizeMapper } from '../../../utils/styles';

const ButtonSet = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${props => sizeMapper(props.margin, 'medium no no')};
`;

export default ButtonSet;
