import styled from 'styled-components';
import { transparentize, opacify } from 'polished';
import { mapper, colorMapper } from '../../../utils/styles';
import { COLOR_SECONDARY } from '../../styles';

const getLabelBackgroundColor = props =>
  !props.color || props.color === COLOR_SECONDARY
    ? transparentize(0.95, props.theme.brandDefault)
    : transparentize(0.9, colorMapper(props));

const getLabelColor = props =>
  !props.color || props.color === COLOR_SECONDARY ? props.theme.brandDefault : colorMapper(props);

export const Label = styled.span`
  display: inline-block;
  width: ${props => mapper(props.size, { auto: 'auto', small: '60px', medium: '80px', large: '100px' }, 'auto')};
  max-width: 100%;
  height: 22px;
  padding: 0 6px;
  overflow: hidden;
  border-radius: 5px;
  background-color: ${getLabelBackgroundColor};
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 22px;
  font-weight: ${props => props.theme.fontWeightLight};
  font-size: 12px;
  color: ${getLabelColor};
`;

export const LabelButton = Label.withComponent('button').extend.attrs({ type: 'button' })`
  border: none;
  cursor: pointer;
  outline: none;

  &:active {
    background-color: ${props => opacify(0.04, getLabelBackgroundColor(props))};
  }
`;
