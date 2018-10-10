import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Input } from './Input';

export const FileInputInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  margin-right: 8px;
  padding: 4px 10px;
  background-color: ${props => props.theme.brandSecondary};
  border-radius: 3px;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 12px;
  color: ${props => props.theme.grayDarker};

  &:active {
    background-color: ${props => darken(0.02, props.theme.brandSecondary)};
  }
`;

export const FileInputText = styled.span`
  flex: 1;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

export const FileInput = Input.withComponent('div').extend`
  display: flex;
  align-items: center;

  ${props =>
    props.isEmpty &&
    css`
      ${FileInputText} {
        color: ${props => props.theme.grayDark};
      }
    `};
`;
