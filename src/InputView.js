const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constants');
const OutputView = require('./OutputView');
const Recommendation = require('./Recommendation');
const Validation = require('./Validation');

class InputView {
  constructor() {}

  readCoachName() {
    Console.readLine(INPUT_MESSAGE.COACH_NAME, (input) =>
      this.createCoaches(input)
    );
  }

  createCoaches(input) {
    const names = input.split(',');
    const temp = [...names];

    Validation.coach(names);

    this.readDislikeFood(temp, names, []);
  }

  readDislikeFood(temp, names, unlikeMenus) {
    Console.readLine(INPUT_MESSAGE.FOOD_NAME(temp.shift()), (input) =>
      this.setDislikeFood(input, { temp, names, unlikeMenus })
    );
  }

  setDislikeFood(input, { temp, names, unlikeMenus }) {
    const foods = input.split(',');

    Validation.food(foods);
    unlikeMenus.push(foods);

    if (temp.length) {
      this.readDislikeFood(temp, names, unlikeMenus);
      return;
    }

    this.recommandMenu(names, unlikeMenus);
  }

  recommandMenu(names, unlikeMenus) {
    const recommendLists = Array.from({ length: unlikeMenus.length }, () =>
      Array.from({ length: 0 })
    );
    const recommendation = new Recommendation(recommendLists, unlikeMenus);

    for (let i = 0; i < 5; i++) {
      recommendation.recommend();
    }

    const [results, categories] = recommendation.get();

    const ouputView = new OutputView();
    ouputView.printResult(names, categories, results);

    Console.close();
  }
}

module.exports = InputView;
