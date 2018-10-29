// Calculate the Hamming difference between two DNA strands.
export function compute(str1, str2) {
  var c = 0;
  if (str1.length != str2.length) {
    throw new Error("left and right strands must be of equal length");
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) {
      c++;
    }
  }
  return c;
}
