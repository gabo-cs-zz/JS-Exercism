// Determine if a sentence is a pangram.
const ALPH = "abcdefghijklmnopqrstuvwxyz".split('');

export function isPangram(string) {
  var a = string.toLowerCase().replace(/\s+/g, '').split('');
  var diff = ALPH.filter(i => !a.includes(i));
  return diff.length === 0;
}
