import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { sizeMapper } from "../../../utils/styles";
import { loadingOverlay } from "../../styles";
import Icon from "../../components/Icon";

export const PanelSearchIcon = styled(Icon).attrs({ icon: "search" })`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  color: ${props => props.theme.gray};
`;

export const PanelSearchInput = styled.input`
  flex: 1;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  line-height: 22px;
  font-size: 18px;

  &::placeholder {
    text-transform: capitalize;
    color: ${props => props.theme.grayDark};
  }
`;

export const PanelSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
`;

export const PanelSectionLoading = styled.div`
  position: relative;
  padding: 30px 0;
  ${loadingOverlay("24px")};
`;

export const PanelSectionTitle = styled.h2`
  margin: ${props => sizeMapper(props.margin, "no no medium")};
  font-weight: ${props => props.theme.fontWeightLight};
  font-size: 24px;
`;

export const PanelSection = styled.div`
  display: flex;
  position: relative;
  padding: ${props => sizeMapper(props.padding, "no")};

  ${props =>
    props.withBorder &&
    css`
      border-bottom: 1px solid ${props => props.theme.grayLight};
    `};

  ${props =>
    props.dark &&
    css`
      background-color: ${props => props.theme.grayLight};
    `};

  ${props =>
    props.vertical &&
    css`
      flex-direction: column;
    `};

  ${props =>
    props.centered &&
    css`
      justify-content: ${props.vertical ? "flex-start" : "center"};
      align-items: ${props.vertical ? "center" : "flex-start"};
    `};

  ${props =>
    props.sticky &&
    css`
      @supports (position: sticky) {
        position: sticky;
        top: 0;
        z-index: 1100;
      }
    `};

  ${props =>
    props.isLoading &&
    css`
      ${loadingOverlay("24px")};
    `};
`;

export const PanelSectionGroup = styled.div`
  position: relative;

  ${props =>
    props.isLoading &&
    css`
      ${loadingOverlay("24px")};
    `};
`;

export const Panel = styled.div`
  margin: ${props => sizeMapper(props.margin, "no")};
  padding: ${props => sizeMapper(props.padding, "no")};
  background-color: #fff;
  box-shadow: 0 4px 10px ${props => transparentize(0.95, props.theme.grayBase)};
  ${props =>
    props.fluid &&
    css`
      width: 100%;
    `};
`;
