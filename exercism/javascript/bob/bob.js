// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
export const hey = message => {
  message = message.trim();
  if (last(message) === "?" && letters(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (last(message) === "?") {
    return "Sure.";
  } else if (letters(message)) {
    return "Whoa, chill out!";
  } else if (message === "") {
    return "Fine. Be that way!";
  } else return "Whatever.";
};

function last(str) {
  return str[str.length - 1];
}

function letters(str) {
  return str === str.toUpperCase() && str !== str.toLowerCase();
}
