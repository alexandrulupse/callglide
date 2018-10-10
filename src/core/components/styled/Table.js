import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { Link } from "react-router-dom";
import { BareButtonStyle } from "./Button";
import Icon from "../../components/Icon";
import { mapper, sizeMapper } from "../../../utils/styles";

export const TableHeadCellSortIcon = styled(Icon).attrs({ icon: "arrowDown" })`
  position: absolute;
  top: 18px;
  right: 12px;
  display: none;
  width: 12px;
  height: 12px;
  transform: none;
  transition: transform 0.3s ease-out;
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  width: ${props => `${props.width}`};
  min-height: 60px;
  padding: 8px 20px 8px 20px;
  word-break: break-word;
  line-height: 18px;
  font-size: 14px;

  ${props =>
    props.padding &&
    css`
      padding: ${props => sizeMapper(props.padding)};
    `};

  ${props =>
    props.align &&
    css`
      justify-content: ${props =>
        mapper(
          props.align,
          { left: "flex-start", center: "center", right: "flex-end" },
          "left"
        )};
    `};

  ${props =>
    props.vertical &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `};
`;

export const TableHeadCell = TableCell.extend`
  position: relative;
  min-height: 45px;
  padding-right: 26px;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeightMedium};
  font-size: 11px;
  color: ${props => props.theme.grayDarker};
  transition: background-color 0.2s ease-out;

  ${TableHeadCellSortIcon} {
    transform: ${props =>
      mapper(props.sortOrder, { asc: "none", desc: "rotate(180deg)" })};
  }

  ${props =>
    props.sortable &&
    css`
      cursor: pointer;

      &:hover {
        ${TableHeadCellSortIcon} {
          display: inline-block;
        }
      }
    `};

  ${props =>
    props.isSortedBy &&
    css`
      background-color: ${props => props.theme.grayLight};

      ${TableHeadCellSortIcon} {
        display: inline-block;
      }
    `};
`;

export const TableActionIcon = styled(Icon)`
  vertical-align: top;
  width: 13px;
  height: 13px;
`;

export const TableActionLink = styled(Link)`
  margin-right: 15px;
  line-height: 14px;
  font-size: 12px;
  color: ${props => props.theme.grayDark};

  &:hover {
    color: ${props => props.theme.brandPrimary};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const TableActionButton = TableActionLink.withComponent(
  "button"
).extend.attrs({ type: "button" })`
  ${BareButtonStyle};
  color: ${props => props.theme.grayDark};
`;

export const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.grayLight};

  body > & {
    background-color: ${props => props.theme.grayLight};
  }

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `};

  ${props =>
    props.isHighlighted &&
    css`
      background-color: ${transparentize(0.95, props.theme.brandPrimary)};
    `};
`;

export const TableHead = styled.div`
  background-color: ${props => props.theme.grayLighter};

  ${props =>
    props.sticky &&
    css`
      @supports (position: sticky) {
        position: sticky;
        top: ${props.top || 0}px;
        z-index: 1100;
      }
    `};
`;

export const TableBody = styled.div`
  ${props =>
    props.withClickableRows &&
    css`
      ${TableRow}:hover {
        background-color: ${props => props.theme.grayLighter};
        cursor: pointer;
      }
    `};

  ${props =>
    props.virtualized &&
    css`
      ${TableCell} {
        word-break: keep-all;
      }
    `};
`;

export const Table = styled.div`
  width: 100%;
  background-color: #fff;
  font-weight: ${props => props.theme.fontWeightLight};

  td {
    padding: 8px 20px 8px 26px;
    word-wrap: break-word;
    text-align: left;
  }

  ${props =>
    props.height &&
    css`
      height: ${mapper(props.height, {
        small: "30vh",
        medium: "60vh",
        large: "90vh"
      })};
      overflow: auto;
      display: block;
    `};

  ${props =>
    props.withTopBorder &&
    css`
      border-top: 1px solid ${props => props.theme.grayLight};
    `};

  ${props =>
    props.noBottomBorder &&
    css`
      border-bottom: none;

      ${TableBody} ${TableRow}:last-child {
        border-bottom: none;
      }
    `};
`;
