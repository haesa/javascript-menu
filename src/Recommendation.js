const { Random, Console } = require('@woowacourse/mission-utils');
const CATEGORY = require('./Category');
const MENUS = require('./Menus');
const OutputView = require('./OutputView');

class Recommendation {
  #coaches;
  #pickedCategory;
  #categoryCount;
  constructor(coaches) {
    this.#coaches = coaches;
    this.#pickedCategory = [];
    this.#categoryCount = { 일식: 0, 한식: 0, 중식: 0, 아시안: 0, 양식: 0 };
  }

  recommend() {
    this.pick();

    const names = this.#coaches.map((name) => name);
    OutputView.printResult(names, this.#pickedCategory, this.#coaches);
    Console.close();
  }

  pick() {
    for (let i = 0; i < 5; i++) {
      const category = this.getCategory();
      this.#pickedCategory.push(category);

      this.#coaches.forEach((coach) => this.selectMenu(category, coach));
    }
  }

  getCategory() {
    while (true) {
      const category = CATEGORY[Random.pickNumberInRange(1, 5) - 1];

      if (this.#categoryCount[category] < 2) {
        this.#categoryCount[category] += 1;
        return category;
      }
    }
  }

  selectMenu(category, coach) {
    const { dislikeFoods, recommendedFoods } = coach;
    const menus = MENUS[category];
    const menusIndex = menus.map((_, index) => index);

    while (true) {
      const pickedMenu = menus[Random.shuffle(menusIndex)[0]];

      if (!this.isValidMenu(pickedMenu, coach)) {
        recommendedFoods.push(pickedMenu);
        break;
      }
    }
  }

  isValidMenu(pickedMenu, { dislikeFoods, recommendedFoods }) {
    return (
      dislikeFoods.includes(pickedMenu) || recommendedFoods.includes(pickedMenu)
    );
  }
}

module.exports = Recommendation;
