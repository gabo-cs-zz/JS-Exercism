export class Squares {
  constructor(number) {
    const RANGE = [...Array(number).keys()].map(i => i + 1);
    this.squareOfSum = RANGE.reduce((a, b) => a + b) ** 2;
    this.sumOfSquares = RANGE.reduce((sum, i) => sum + i ** 2);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
