const reducer = (sum, i) => sum + i;

export const validate = input => {
  let numbers = [...`${input}`];
  let armstrongValue = numbers.map(i => i ** numbers.length).reduce(reducer);
  return armstrongValue === input;
};
