import { Random } from '@woowacourse/mission-utils';
import { MENU } from '../constants/index.js';

class Recommendation {
  static pickMenu(category) {
    const menuIndex = Recommendation.#shuffleMenu();
    return MENU[category][menuIndex];
  }

  static #shuffleMenu() {
    const indexArray = Array.from({ length: 9 }, (_, index) => index);
    return Random.shuffle(indexArray)[0];
  }

  static isFoodSafe({ avoidedFoodList }, menu) {
    return !avoidedFoodList.includes(menu);
  }

  static hasMenu({ menus }, menu) {
    return menus.includes(menu);
  }
}

export default Recommendation;
