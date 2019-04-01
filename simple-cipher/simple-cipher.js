// Implement a simple shift cipher like Caesar and a more secure substitution cipher.
export class Cipher {
  constructor(key) {
    this.key = key || randomKey();
    if (key === "" || !this.key.match(/^[a-z]+$/)) {
      throw new Error("Bad key");
    }
  }

  encode(plainText) {
    return xCode(this.key, plainText, 1);
  }

  decode(encodedText) {
    return xCode(this.key, encodedText, -1);
  }
}

const alph = "abcdefghijklmnopqrstuvwxyz";

function randomKey() {
  let key = "";
  for (let i = 105; i > 0; i--) {
    key += alph[Math.floor(Math.random() * Math.floor(i))];
  }
  return key;
}

const mod = (n, m) => ((n % m) + m) % m;

function xCode(key, inText, sign) {
  return [...inText].reduce((outText, letter, ii) => {
    const offset = sign * alph.indexOf(key[mod(ii, key.length)]);
    return outText + alph[mod(alph.indexOf(letter) + offset, alph.length)];
  }, "");
}

