const { Console } = require('@woowacourse/mission-utils');
const { SERVICE_MESSAGE } = require('./Constants');

class OutputView {
  constructor() {}

  static start() {
    Console.print(SERVICE_MESSAGE.START);
  }

  static printResult(names, categories, coaches) {
    Console.print(SERVICE_MESSAGE.RESULT);
    Console.print(SERVICE_MESSAGE.DAYS);
    Console.print(SERVICE_MESSAGE.CATEGORY(categories));
    coaches.forEach((coach) =>
      Console.print(SERVICE_MESSAGE.MENU(coach.name, coach.recommendedFoods))
    );
    Console.print(SERVICE_MESSAGE.FINISH);
  }
}

module.exports = OutputView;
