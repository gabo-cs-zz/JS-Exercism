// Given an age in seconds, calculate how old someone would be on planet age
const EARTH_SECS = 31557600;

const PLANETS = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

const calculation = (seconds, orbitalPeriod) => {
  const num = seconds / (EARTH_SECS * orbitalPeriod);
  return Number(num.toFixed(2));
};

export class SpaceAge {
  constructor(secs) {
    this.seconds = secs;
    for (let [planet, period] of Object.entries(PLANETS)) {
      this[`on${planet}`] = () => calculation(this.seconds, period);
    }
  }
}
