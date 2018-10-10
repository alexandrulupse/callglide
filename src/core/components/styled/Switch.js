import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { sizeMapper } from '../../../utils/styles';

export const SwitchText = styled.span`
  margin-left: 15px;
  text-transform: capitalize;
  line-height: 18px;
  font-size: 14px;
`;

export const SwitchHandle = styled.div`
  position: absolute;
  top: 2px;
  left: 3px;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px ${props => transparentize(0.9, props.theme.grayBase)};
  transform: none;
  transition: transform 0.1s;
`;

export const SwitchBar = styled.div`
  position: relative;
  width: 35px;
  height: 20px;
  background-color: ${props => props.theme.gray};
  border-radius: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => sizeMapper(props.margin, 'no')};

  ${props =>
    props.isActive &&
    css`
      ${SwitchBar} {
        background-color: ${props => props.theme.brandPrimary};
      }

      ${SwitchHandle} {
        transform: translateX(14px);
      }
    `};

  ${props =>
    props.isDisabled &&
    css`
      pointer-events: none;

      ${SwitchBar} {
        background-color: ${props => props.theme.gray};
      }

      ${SwitchHandle} {
        background-color: ${props => props.theme.grayLighter};
      }
    `};
`;
