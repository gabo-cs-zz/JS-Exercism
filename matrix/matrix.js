const toRows = (string) => string.split(' ').map(Number);

export class Matrix {
  constructor(input) {
    this.rows = input.split('\n').map(toRows);
    this.columns = this.toColumns();
  }

  toColumns() {
    const cols = [];
    for (let i = 0; i < this.rows[0].length; i++) {
      cols[i] = [];
      for (let j = 0; j < this.rows.length; j++) {
        cols[i].push(this.rows[j][i]);
      }
    }
    return cols;
  }
}
