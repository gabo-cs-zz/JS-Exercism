const ROMANS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

export const toRoman = number => {
  let result = '';
  Object.keys(ROMANS).map(function(key) {
    while (number >= ROMANS[key]) {
      result += key;
      number -= ROMANS[key];
    }
  });
  return result;
};
