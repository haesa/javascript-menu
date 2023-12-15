import { Random } from '@woowacourse/mission-utils';
import Category from './Domain/Category.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import Recommendation from './Domain/Recommendation.js';

class App {
  #coaches = [];
  #category = [];

  async play() {
    OutputView.printStartMessage();
    this.#coaches = await this.readData();
    this.recommendMenu();
    OutputView.printResult(this.#coaches, this.#category);
  }

  async readData() {
    const names = await this.readCoachName();
    return await names.reduce(
      (promise, name) =>
        promise.then(async (data) => {
          const avoidedFoodList = await this.readAvoidedFood(name);
          return [...data, { name, menus: [], avoidedFoodList }];
        }),
      Promise.resolve([])
    );
  }

  async readCoachName() {
    try {
      return await InputView.readCoachName();
    } catch (error) {
      OutputView.printErrorMessage(error);
      return await this.readCoachName();
    }
  }

  async readAvoidedFood(name) {
    try {
      return await InputView.readAvoidedFood(name);
    } catch (error) {
      OutputView.printErrorMessage(error);
      return await this.readAvoidedFood();
    }
  }

  recommendMenu() {
    const categoryManager = new Category();
    for (let day = 0; day < 5; day += 1) {
      const category = this.pickCategory(categoryManager);
      this.#coaches = this.#coaches.map((coach) =>
        App.selectMenu(coach, category)
      );
    }
  }

  pickCategory(categoryManager) {
    let pickedCategory;
    do {
      pickedCategory = Category.pick(Random.pickNumberInRange(1, 5));
    } while (!categoryManager.canSelectCategory(pickedCategory));
    this.#category = categoryManager.pushCategory(pickedCategory);
    return pickedCategory;
  }

  static selectMenu(coach, category) {
    let menu;
    do {
      menu = Recommendation.pickMenu(category);
    } while (
      !Recommendation.isFoodSafe(coach, menu) ||
      Recommendation.hasMenu(coach, menu)
    );
    return { ...coach, menus: [...coach.menus, menu] };
  }
}

export default App;
