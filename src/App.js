const { Console } = require('@woowacourse/mission-utils');
const { SERVICE_MESSAGE } = require('./Constants');
const InputView = require('./InputView');

class App {
  constructor() {}

  play() {
    Console.print(SERVICE_MESSAGE.START);
    InputView.readCoachName();
  }
}

module.exports = App;

const app = new App();
app.play();
