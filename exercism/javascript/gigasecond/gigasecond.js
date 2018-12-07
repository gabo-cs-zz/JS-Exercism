// Calculate the moment when someone has lived for 10^9 seconds.
const GS = Math.pow(10, 12);

export const gigasecond = (date) => {
  return new Date(date.getTime() + GS);
}
