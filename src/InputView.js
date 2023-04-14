const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constants');
const Recommendation = require('./Recommendation');
const Validation = require('./Validation');

class InputView {
  constructor() {}

  static readCoachName() {
    Console.readLine(INPUT_MESSAGE.COACH_NAME, (input) => {
      const names = input.split(',');
      Validation.coach(names);
      const coaches = names.map((name) => ({
        name,
        dislikeFoods: [],
        recommendedFoods: [],
      }));
      InputView.readDislikeFood(coaches, 0);
    });
  }

  static readDislikeFood(coaches, index) {
    Console.readLine(INPUT_MESSAGE.FOOD_NAME(coaches[index].name), (input) => {
      const foods = input.split(',');

      Validation.food(foods);

      coaches[index].dislikeFoods = foods;

      index === coaches.length - 1
        ? new Recommendation(coaches).recommend()
        : InputView.readDislikeFood(coaches, ++index);
    });
  }
}

module.exports = InputView;
