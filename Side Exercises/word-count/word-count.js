export class Words {
  count(word) {
    let result = {};
    let array = word
      .trim()
      .toLowerCase()
      .replace(/\s{1,}/g, ' ')
      .split(' ');
    array.map(i => (result[i] = array.filter(j => i == j).length));
    return result;
  }
}
