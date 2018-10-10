import styled, { css } from "styled-components";
import { mapper, sizeMapper } from "../../../utils/styles";

export const RadioCheck = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 12px;
  vertical-align: top;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 8px;
  cursor: pointer;
`;

export const RadioText = styled.span`
  vertical-align: top;
  text-transform: capitalize;
  font-size: 14px;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + ${RadioCheck} {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHJ4PSI0LjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIgZmlsbD0iIzE0OEM3RCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
    background-position: center center;
    background-repeat: no-repeat;
    border-color: ${props => props.theme.brandPrimary};
  }
`;

export const Radio = styled.label`
  margin: ${props => sizeMapper(props.margin, "no")};

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

  ${RadioCheck} {
    width: ${props => mapper(props.size, { small: "13px", medium: "15px" })};
    height: ${props => mapper(props.size, { small: "13px", medium: "15px" })};
    margin-right: ${props =>
      mapper(props.size, { small: "10px", medium: "12px" })};
    background-size: ${props =>
      mapper(props.size, { small: "7px 7px", medium: "9px 9px" })};
  }

  ${RadioText} {
    line-height: ${props =>
      mapper(props.size, { small: "13px", medium: "15px" })};
    font-size: ${props =>
      mapper(props.size, { small: "12px", medium: "14px" })};
  }
`;
