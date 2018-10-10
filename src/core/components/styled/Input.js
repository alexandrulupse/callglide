import styled, { css } from 'styled-components';

export const InputStyle = props => `
  width: 100%;
  padding: 2px 2px 8px 0;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid ${props.theme.grayLight};
  border-radius: 0;
  line-height: 22px;
  font-weight: ${props.theme.fontWeightLight};
  font-size: 14px;

  &:focus {
    border-bottom-color: ${props.theme.brandPrimary};
  }

  &:disabled {
    color: ${props.theme.grayDark};
  }

  &::placeholder {
    text-transform: capitalize;
    color: ${props.theme.grayDark};
  }
  `;

export const SelectStyle = `
  appearance: none;
  padding-right: 36px;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2U9IiMwMzk4OEEiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNMTIgMUw2LjMzMyA2IDEgMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utb3BhY2l0eT0iLjcwNCIvPjwvc3ZnPg==') right 2px center no-repeat;

  &:focus {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2U9IiMwMzk4OEEiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNMTIgMUw2LjMzMyA2IDEgMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
  }

  &:disabled {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2U9IiM5Njk2OTYiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNMTIgMUw2LjMzMyA2IDEgMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
  }
`;

export const Input = styled.input`
  ${InputStyle};

  ${props =>
    props.withSelectStyle &&
    css`
      ${SelectStyle};
    `};
`;
