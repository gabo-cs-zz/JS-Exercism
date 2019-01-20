// Given an age in seconds, calculate how old someone would be on planet age
const EARTH_SECS = 31557600;

const result = (seconds, orbitalPeriod) => {
  const NUM = seconds / (EARTH_SECS * orbitalPeriod);
  return Number(parseFloat(NUM).toFixed(2));
};

export class SpaceAge {
  constructor(secs) {
    this.seconds = secs;
  }

  onEarth() {
    return result(this.seconds, 1);
  }

  onMercury() {
    return result(this.seconds, 0.2408467);
  }

  onVenus() {
    return result(this.seconds, 0.61519726);
  }

  onMars() {
    return result(this.seconds, 1.8808158);
  }

  onJupiter() {
    return result(this.seconds, 11.862615);
  }

  onSaturn() {
    return result(this.seconds, 29.447498);
  }

  onUranus() {
    return result(this.seconds, 84.016846);
  }

  onNeptune() {
    return result(this.seconds, 164.79132);
  }
}
