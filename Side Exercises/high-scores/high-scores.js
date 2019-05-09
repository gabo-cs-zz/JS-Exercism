export class HighScores {
  constructor(input) {
    this.scores = input;
    this.latest = [...this.scores].pop();
    this.personalBest = Math.max(...this.scores);
    this.personalTopThree = [...this.scores].sort((a, b) => b - a).slice(0, 3);
  }
}
