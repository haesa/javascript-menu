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
    this.pickCategory();
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

  pickCategory() {
    const categoryManager = new Category();

    while (this.#category.length < 5) {
      const pickedCategory = Category.pick(Random.pickNumberInRange(1, 5));
      if (categoryManager.canSelectCategory(pickedCategory)) {
        this.#category = categoryManager.pushCategory(pickedCategory);
      }
    }
  }

  recommendMenu() {
    this.#coaches = this.#coaches.map((coach) =>
      this.getWeeklyRecommendation(coach)
    );
  }

  getWeeklyRecommendation(coach) {
    return this.#category.reduce(
      (result, category) => App.selectMenu(result, category),
      coach
    );
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
