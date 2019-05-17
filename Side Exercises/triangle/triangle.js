const inequality = (a, b, c) => Math.abs(a - b) < c && c < a + b;

const size = (a, b, c) => a !== 0 && b !== 0 && c !== 0;

function hasNegatives() {
  return new RegExp("[-]").test(...arguments);
}

function validateEquilateral() {
  let arr = [...arguments].sort((a, b) => b - a);
  return arr[0] === arr[2];
}

function validateIsoceles() {
  let arr = [...arguments].sort((a, b) => b - a);
  return arr[0] === arr[1];
}

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (
      !inequality(this.a, this.b, this.c) ||
      !size(this.a, this.b, this.c) ||
      hasNegatives(this.a, this.b, this.c)
    ) {
      throw new Error("Illegal triangle(s)");
    }
    if (validateEquilateral(this.a, this.b, this.c)) return "equilateral";
    if (validateIsoceles(this.a, this.b, this.c)) return "isosceles";
    return "scalene";
  }
}