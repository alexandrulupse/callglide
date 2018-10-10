import styled, { css } from 'styled-components';
import { mapper, sizeMapper } from '../../../utils/styles';

export const CheckboxCheck = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 12px;
  vertical-align: top;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 3px;
  cursor: pointer;
`;

export const CheckboxText = styled.span`
  vertical-align: top;
  text-transform: capitalize;
  line-height: 15px;
  font-size: 14px;
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked + ${CheckboxCheck} {
    background-color: ${props => props.theme.brandPrimary};
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xIDMuMjQzTDMuMzkgNiA4IDEiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIxLjQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==');
    background-position: center center;
    background-repeat: no-repeat;
    border-color: ${props => props.theme.brandPrimary};
  }
`;

export const Checkbox = styled.label`
  margin: ${props => sizeMapper(props.margin, 'no')};

  ${props =>
    props.block &&
    css`
      display: block;
    `};

  ${props =>
    props.isDisabled &&
    css`
      opacity: 0.5;
    `};

  ${CheckboxCheck} {
    width: ${props => mapper(props.size, { small: '13px', medium: '15px' })};
    height: ${props => mapper(props.size, { small: '13px', medium: '15px' })};
    margin-right: ${props => mapper(props.size, { small: '10px', medium: '12px' })};
  }

  ${CheckboxText} {
    line-height: ${props => mapper(props.size, { small: '13px', medium: '15px' })};
    font-size: ${props => mapper(props.size, { small: '12px', medium: '14px' })};
  }
`;
