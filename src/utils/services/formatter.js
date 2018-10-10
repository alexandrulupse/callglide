import moment from "moment-timezone";

moment.updateLocale("today-tommorow", {
  calendar: {
    sameDay: "today",
    nextDay: "tommorow"
  }
});

export const number = number => Number(number);
export const decimal = (number, precision = 2) =>
  Number(number).toFixed(precision);
export const coordinate = (number, precision = 4) =>
  Number(number).toFixed(precision);
export const date = (date, format = "L") => moment(date).format(format);
export const time = date => moment(date).format("hh:mm A");
export const dateAndTime = date => moment(date).format("L hh:mm A");
export const duration = (duration, units = "seconds", template = "hh:mm:ss") =>
  moment.duration(duration, units).format(template, { trim: false });

export const humanizeDate = date => {
  const dateAsMoment = moment(date);
  const today = moment().endOf("day");
  const yesterday = moment()
    .subtract(1, "day")
    .endOf("day");
  const tomorrow = moment()
    .add(1, "day")
    .endOf("day");

  if (dateAsMoment < today && dateAsMoment > yesterday) return "today";
  if (dateAsMoment < tomorrow && dateAsMoment > today) return "tommorow";
  return dateAsMoment.format("MM/DD/YYYY");
};
