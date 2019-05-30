const factorial = num => {
  return num <= 1 ? 1 : num * factorial(num - 1);
};

const row = n => {
  let row = [];
  for (let i = 0; i <= n; i++) {
    row.push(factorial(n) / (factorial(i) * factorial(n - i)));
  }
  return row;
};

const triangle = n => {
  const RANGE = [...Array(n).keys()].map(i => i + 1);
  RANGE.unshift(0);
  return RANGE.map(i => row(i));
};

export class Triangle {
  constructor(number) {
    this.rows = triangle(number - 1);
    this.lastRow = this.rows[number - 1];
  }
}
