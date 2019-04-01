// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
export const hey = message => {
  message = message.trim();
  if (message.endsWith("?") && hasNoLowercase(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (message.endsWith("?")) {
    return "Sure.";
  } else if (hasNoLowercase(message)) {
    return "Whoa, chill out!";
  } else if (message === "") {
    return "Fine. Be that way!";
  } else return "Whatever.";
};

function hasNoLowercase(str) {
  return str === str.toUpperCase() && str !== str.toLowerCase();
}