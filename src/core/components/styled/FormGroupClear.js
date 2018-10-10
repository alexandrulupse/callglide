import styled from 'styled-components';
import { BareButtonStyle } from './';

export const FormGroupClear = styled.button.attrs({ type: 'button' })`
  ${BareButtonStyle};
  width: 10px;
  height: 10px;
  background-color: ${props => props.theme.brandPrimary};
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjkxOC45TDUuMS4wODJhLjI2NC4yNjQgMCAwIDAtLjM4MiAwTDMgMS44IDEuMjgyLjA4MmEuMjY0LjI2NCAwIDAgMC0uMzgyIDBMLjA4Mi45YS4yNjQuMjY0IDAgMCAwIDAgLjM4MkwxLjggMyAuMDgyIDQuNzE4YS4yNjQuMjY0IDAgMCAwIDAgLjM4MmwuODE4LjgxOGMuMTEuMTEuMjczLjExLjM4MiAwTDMgNC4ybDEuNzE4IDEuNzE4QS4yOTUuMjk1IDAgMCAwIDQuOTEgNmEuMjk1LjI5NSAwIDAgMCAuMTkxLS4wODJsLjgxOC0uODE4YS4yNjQuMjY0IDAgMCAwIDAtLjM4Mkw0LjIgM2wxLjcxOC0xLjcxOGEuMjY0LjI2NCAwIDAgMCAwLS4zODJ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=');
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 5px;
  position: absolute;
  top: 11px;
  right: 22px;

  &:disabled {
    background-color: ${props => props.theme.grayDark};
  }
`;

export const FormGroupClearContainer = styled.div`
  position: relative;
`;
