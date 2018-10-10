import styled from 'styled-components';

const FormLabel = styled.label`
  display: inline-block;
  pointer-events: none;
  text-transform: capitalize;
  line-height: 20px;
  font-size: 14px;
  color: ${props => props.theme.grayDark};
  transform: translateY(23px);
`;

export default FormLabel;
