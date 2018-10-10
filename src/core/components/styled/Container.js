import styled, { css } from 'styled-components';
import { sizeMapper } from '../../../utils/styles';
import { loadingOverlay } from '../../styles';

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: ${props => sizeMapper(props.margin, 'no')};
  padding: ${props => sizeMapper(props.padding, 'no')};

  ${props =>
    props.isLoading &&
    css`
      ${loadingOverlay('24px')};
    `};
`;

export default Container;
