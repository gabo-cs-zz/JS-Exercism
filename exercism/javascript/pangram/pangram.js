// Determine if a sentence is a pangram.
const alph = "abcdefghijklmnopqrstuvwxyz";

export function isPangram(string) {
  var A = string.toLowerCase().replace(/\s+/g, '').split('');
  var B = alph.split('');
  var diff = B.filter(i => !A.includes(i));
  return (diff.length === 0) ? true : false;
}
