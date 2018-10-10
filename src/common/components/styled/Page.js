import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { Link } from "react-router-dom";
import { Icon } from "../../../core/components";
import { loading, loadingOverlay, slideInUp } from "../../../core/styles";
import { sizeMapper } from "../../../utils/styles";

export const PageTitle = styled.h1`
  margin: 5px 0 10px;
  line-height: 40px;
  text-transform: capitalize;
  font-weight: ${props => props.theme.fontWeightLight};
  font-size: 36px;
`;

export const PageSubtitle = styled.span`
  display: block;
  line-height: 15px;
  font-weight: ${props => props.theme.fontWeightLight};
  font-size: 12px;
  color: ${props => props.theme.grayDarker};
`;

export const PageBackButtonIcon = styled(Icon).attrs({ icon: "back" })`
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  margin-top: 12px;
`;

export const PageBackButton = styled(Link)`
  position: absolute;
  top: 0;
  left: -30px;
  display: inline-block;
  height: 40px;
  width: 20px;
  color: ${props => props.theme.brandPrimary};
`;

export const PageTitleContainer = styled.div`
  position: relative;
`;

export const PageDetails = styled.div`
  ${props =>
    props.withBackButton &&
    css`
      padding-left: 30px;
    `};
`;

export const PageActions = styled.div`
  min-width: fit-content;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

export const PageContent = styled.div`
  position: relative;
  width: 1140px;
  margin: ${props => sizeMapper(props.margin, "no auto medium")};
  margin-bottom: 70px;

  ${props =>
    props.fluid &&
    css`
      width: 100%;
    `};

  ${props =>
    props.fitToVerticalViewport &&
    css`
      height: calc(100vh - 70px);
    `};
`;

export const PageLoading = styled.div`
  height: calc(100vh - 70px);
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -16px 0 0 -16px;
    ${loading("24px")};
  }
`;

export const PageLoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6000;
  ${props => loadingOverlay("24px", props.theme.grayBase, 0.7, 6000)};
`;

export const PageFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 15px 0;
  background-color: #fff;
  box-shadow: 0 -3px 6px ${props => transparentize(0.95, props.theme.grayBase)};

  ${props =>
    props.animated &&
    css`
      animation: ${slideInUp} 0.3s ease-out;
    `};
`;

export const Page = styled.div`
  min-height: 100vh;
`;
