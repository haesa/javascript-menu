const { Console, Random } = require('@woowacourse/mission-utils');
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
    while (true) {
      const pickedMenu = this.shuffleMenu(MENUS[category])[0];

      if (!coach.isValidMenu(pickedMenu)) {
        coach.pushRecommendedMenu(pickedMenu);
        break;
      }
    }
  }

  shuffleMenu(menus) {
    const indexArray = Array.from(
      { length: menus.length },
      (_, idx) => idx + 1
    );
    return menus[Random.shuffle(indexArray)[0] - 1];
  }
}

module.exports = Recommendation;
