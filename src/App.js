const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  constructor() {}

  play() {
    OutputView.start();
    InputView.readCoachName();
  }
}

module.exports = App;

const app = new App();
app.play();
