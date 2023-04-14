const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constants');
const OutputView = require('./OutputView');
const Recommendation = require('./Recommendation');
const Validation = require('./Validation');

class InputView {
  constructor() {}

  readCoachName() {
    Console.readLine(INPUT_MESSAGE.COACH_NAME, (input) => {
      const names = input.split(',');
      Validation.coach(names);
      this.readDislikeFood(names, [], 0);
    });
  }

  readDislikeFood(names, unlikeMenus, index) {
    Console.readLine(INPUT_MESSAGE.FOOD_NAME(names[index]), (input) => {
      const foods = input.split(',');

      Validation.food(foods);
      unlikeMenus.push(foods);

      index === names.length - 1
        ? this.recommandMenu(names, unlikeMenus)
        : this.readDislikeFood(names, unlikeMenus, ++index);
    });
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
