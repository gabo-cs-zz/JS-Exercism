export function matchingBrackets(str) {
  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];
  var res = [];
  for (let char of str) {
    if (opening.includes(char)) {
      res.push(char);
      continue;
    }
    if (closing.includes(char)) {
      let matching = opening[closing.indexOf(char)];
      let last = res.pop();
      if (last != matching) return false;
    }
  }
  return res.length == 0;
}
