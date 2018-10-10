import { injectGlobal } from 'styled-components';
import { transparentize } from 'polished';
import styledNormalize from 'styled-normalize';
import theme from './theme';

const injectBaseStyles = () => injectGlobal`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    min-width: 1200px;
    overflow-x: auto;
    padding: 0;
    text-rendering: optimizeLegibility;
    background-color: ${theme.bodyBackgroundColor};
    font-family: ${theme.fontFamilyBase};
    font-size: ${theme.fontSizeBase};
    color: ${theme.brandDefault};
  }

  ::selection {
    background-color: ${transparentize(0.8, theme.brandPrimary)};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 12px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  .pac-container {
    z-index: 10000;
  }
`;

export default injectBaseStyles;
