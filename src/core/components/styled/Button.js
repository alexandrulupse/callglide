import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import { COLOR_SECONDARY } from "../../styles";
import { mapper, sizeMapper, colorMapper } from "../../../utils/styles";

const getButtonColor = props =>
  props.color === COLOR_SECONDARY ? props.theme.grayDarker : "#fff";

export const BareButtonStyle = `
  position: relative;
  display: inline-block;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  color: inherit;
  user-select: none;
`;

export const ButtonIcon = styled(Icon)`
  width: 14px;
  height: 14px;
  margin: -2px 6px 0 0;
  vertical-align: middle;

  ${props =>
    props.color &&
    css`
      color: ${colorMapper};
    `};
`;

export const Button = styled.button`
  ${BareButtonStyle};
  margin: ${props => sizeMapper(props.margin, "no")};
  padding: ${props =>
    mapper(props.size, { small: "8px 20px", medium: "8px 30px" })};
  background-color: ${colorMapper};
  border-radius: 5px;
  text-transform: capitalize;
  line-height: ${props =>
    mapper(props.size, { small: "15px", medium: "18px" })};
  font-size: ${props => mapper(props.size, { small: "12px", medium: "14px" })};
  color: ${getButtonColor};

  &:active {
    background-color: ${props => darken(0.05, colorMapper(props))};
  }

  &:disabled {
    opacity: 0.5;
  }

  ${props =>
    props.fluid &&
    css`
      flex: 1;
    `};

  ${props =>
    props.line &&
    css`
      background-color: transparent;
      border: 1px solid ${colorMapper};
      color: ${colorMapper};

      &:active {
        background-color: transparent;
        border-color: ${props => darken(0.05, colorMapper(props))};
        color: ${props => darken(0.05, colorMapper(props))};
      }
    `};

  ${props =>
    props.text &&
    css`
      padding: 8px 0;
      background-color: transparent;
      color: ${colorMapper};

      &:active {
        background-color: transparent;
        color: ${props => darken(0.05, colorMapper(props))};
      }
    `};

  ${props =>
    props.icon &&
    css`
      padding: 7px 0;
      background-color: transparent;
      color: ${colorMapper};

      &:active {
        background-color: transparent;
        color: ${props => darken(0.05, colorMapper(props))};
      }

      ${ButtonIcon} {
        width: 20px;
        height: 20px;
        margin: 0;
      }
    `};
`;

export const ButtonLink = Button.withComponent(
  ({ margin, size, color, fluid, line, text, ...props }) => <Link {...props} />
);
