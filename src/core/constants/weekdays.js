import { mapKeys } from "lodash-es";

export const MONDAY = 1;
export const TUESDAY = 2;
export const WEDNESDAY = 3;
export const THURSDAY = 4;
export const FRIDAY = 5;
export const SATURDAY = 6;
export const SUNDAY = 7;

export const MONDAY_SHORTCODE = "M";
export const TUESDAY_SHORTCODE = "T";
export const WEDNESDAY_SHORTCODE = "W";
export const THURSDAY_SHORTCODE = "R";
export const FRIDAY_SHORCUT = "F";
export const SATURDAY_SHORTCODE = "S";
export const SUNDAY_SHORTCODE = "U";

const WEEKDAYS = [
  {
    id: MONDAY,
    shortCode: MONDAY_SHORTCODE
  },
  {
    id: TUESDAY,
    shortCode: TUESDAY_SHORTCODE
  },
  {
    id: WEDNESDAY,
    shortCode: WEDNESDAY_SHORTCODE
  },
  {
    id: THURSDAY,
    shortCode: THURSDAY_SHORTCODE
  },
  {
    id: FRIDAY,
    shortCode: FRIDAY_SHORCUT
  },
  {
    id: SATURDAY,
    shortCode: SATURDAY_SHORTCODE
  },
  {
    id: SUNDAY,
    shortCode: SUNDAY_SHORTCODE
  }
];

export const WEEKDAYS_BY_ID = mapKeys(WEEKDAYS, "id");

export const WEEKDAYS_BY_SHORTCODE = mapKeys(WEEKDAYS, "shortCode");
