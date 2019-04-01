export const reverseString = input => {
  return input === "" ? "" : reverseString(input.substr(1)) + input.charAt(0);
};