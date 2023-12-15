import { CATEGORY } from '../constants/index.js';

class Category {
  #categories;

  constructor(categories) {
    this.#categories = categories;
  }

  static pick(number) {
    return CATEGORY.get[number];
  }

  canSelectCategory(pickCategory) {
    return (
      this.#categories //
        .filter((category) => category === pickCategory).length < 2
    );
  }

  pushCategory(category) {
    this.#categories.push(category);
    return [...this.#categories];
  }
}

export default Category;
