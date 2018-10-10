import styled from 'styled-components';
import { transparentize } from 'polished';
import { BareButtonStyle } from './Button';
import { InputStyle, SelectStyle } from './Input';

const DatePicker = styled.div`
  .DayPicker {
    display: inline-block;
  }

  .DayPicker-wrapper {
    position: relative;
    flex-direction: row;
    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    display: table;
    margin: 15px 15px 0;
    border-collapse: collapse;
    border-spacing: 0;
    user-select: none;
  }

  .DayPicker-NavBar {
    position: relative;
  }

  .DayPicker-NavButton {
    position: absolute;
    top: 0;
    display: inline-block;
    padding: 14px 14px;
    cursor: pointer;
    background-size: 50%;
    background: center no-repeat;
    border-radius: 3px;
    transition: opacity 0.2s ease-out;

    &:hover {
      background-color: ${props => props.theme.grayLight};
    }
  }

  .DayPicker-NavButton--prev {
    left: 5px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy40IDEuNEw2IDAgMCA2bDYgNiAxLjQtMS40TDIuOCA2eiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==');
  }

  .DayPicker-NavButton--next {
    right: 5px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjYgMS40TDIgMGw2IDYtNiA2LTEuNC0xLjRMNS4yIDZ6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+);
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    margin-bottom: 15px;
    text-align: center;
    line-height: 18px;
    font-weight: ${props => props.theme.fontWeightMedium};
    font-size: 14px;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 15px;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    display: table-cell;
    min-width: 32px;
    padding: 8px 6px;
    text-align: center;
    font-weight: ${props => props.theme.fontWeightMedium};
    font-size: 12px;
    color: ${props => props.theme.grayDark};
  }

  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Month {
    margin: 5px 5px 0;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    display: table-cell;
    padding: 8px 0;
    vertical-align: middle;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Footer {
    margin-top: 15px;
    padding: 4px 0;
    text-align: center;
  }

  .DayPicker-TodayButton {
    ${BareButtonStyle};
    padding: 8px;
    border-radius: 3px;
    font-weight: ${props => props.theme.fontWeightMedium};
    font-size: 12px;
    color: ${props => props.theme.brandDefault};
    transition: opacity 0.2s ease-out;

    &:hover {
      opacity: 1;
    }

    &:active {
      background-color: ${props => props.theme.grayLight};
    }
  }

  .DayPicker-Day--today {
    font-weight: ${props => props.theme.fontWeightMedium};
    color: ${props => props.theme.brandPrimary};
  }

  .DayPicker-Day--outside {
    visibility: hidden;
  }

  .DayPicker-Day--disabled {
    cursor: default;
    color: ${props => props.theme.grayDark};
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled) {
    background-color: ${props => props.theme.brandPrimary};
    border-radius: 3px;
    color: #fff;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: ${props => transparentize(0.9, props.theme.brandPrimary)};
    border-radius: 0;
    color: ${props => props.theme.brandPrimary};
  }

  .DayPicker:not(.DayPicker--interactionDisabled) {
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):hover {
      background-color: ${props => props.theme.grayLight};
      border-radius: 3px;
    }
  }

  .DayPickerInput {
    * {
      outline: none;
    }

    input {
      ${InputStyle};
      ${SelectStyle};
    }
  }

  .DayPickerInput-Overlay {
    position: absolute;
    z-index: 3000;
    padding: 10px;
    background: #fff;
    box-shadow: 0 4px 8px ${props => transparentize(0.9, props.theme.grayBase)};
  }
`;

export default DatePicker;
