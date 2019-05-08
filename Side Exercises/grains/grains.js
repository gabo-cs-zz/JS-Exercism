import BigInt from './lib/big-integer';

const MAX_SQUARE = 64;

export class Grains {
  square(number) {
    const base = BigInt(2);
    return base.pow(number - 1).toString();
  }

  total() {
    let total = BigInt(this.square(MAX_SQUARE));
    return total
      .times(2)
      .minus(1)
      .toString();
  }
}
