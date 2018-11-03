// Convert a number to a string, the contents of which depend on the number's factors.
const factors = {
  3: "Pling",
  5: "Plang",
  7: "Plong"
};

class Raindrops {
  convert(number) {
    var str = "";
    for (let i in factors) {
      if (number % i === 0) {
        str += factors[i];
      }
    }
    return str.length === 0 ? number.toString() : str;
  }
}

export default Raindrops;
