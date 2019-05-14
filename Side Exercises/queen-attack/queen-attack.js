const areIdentical = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const setCharAt = (str, index, chr) => {
  return str.substr(0, index) + chr + str.substr(index + 1);
};

var board = ['_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _',
      '_ _ _ _ _ _ _ _\n'];

const boardAux = [...board];

export class QueenAttack {
  constructor(positioning = { white: [0, 3], black: [7, 3] }) {
    this.white = positioning.white;
    this.black = positioning.black;
    if (areIdentical(this.white, this.black)) {
      throw new Error('Queens cannot share the same space');
    }
  }

  setBoard() {
    board = [...boardAux];
    const [wi, wj] = this.white;
    const [bi, bj] = this.black;
    board[wi] = setCharAt(board[wi], wj * 2, 'W');
    board[bi] = setCharAt(board[bi], bj * 2, 'B');
  }

  toString() {
    this.setBoard();
    return board.join('\n');
  }

  canAttack() {
    const [wi, wj] = this.white;
    const [bi, bj] = this.black;
    return Math.abs(bi - wi) == Math.abs(bj - wj) || wi === bi || wj === bj;
  }
}