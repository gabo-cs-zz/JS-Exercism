// Given a year, report if it is a leap year.
export function isLeap(year) {
  let f = (year % 4) === 0 && (year % 100) !== 0;
  let s = (year % 100) === 0 && (year % 400) === 0;
  return f || s;
}
