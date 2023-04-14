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
      const coaches = names.map((name) => ({
        name,
        dislikeFoods: [],
        recommendedFoods: [],
      }));
      this.readDislikeFood(coaches, 0);
    });
  }

  readDislikeFood(coaches, index) {
    Console.readLine(INPUT_MESSAGE.FOOD_NAME(coaches[index].name), (input) => {
      const foods = input.split(',');

      Validation.food(foods);
      coaches[index].dislikeFoods.push(foods);

      index === coaches.length - 1
        ? this.recommandMenu(coaches)
        : this.readDislikeFood(coaches, ++index);
    });
  }

  recommandMenu(coaches) {
    const recommendation = new Recommendation(coaches);

    for (let i = 0; i < 5; i++) {
      recommendation.recommend();
    }

    const [results, categories] = recommendation.get();

    const ouputView = new OutputView();
    const names = coaches.map((name) => name);
    ouputView.printResult(names, categories, results);

    Console.close();
  }
}

module.exports = InputView;
