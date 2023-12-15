import { Random } from '@woowacourse/mission-utils';
import { MENU } from '../constants/index.js';

class Recommendation {
  static pickMenu(category) {
    const menuIndex = Recommendation.#shuffleMenu(MENU[category]);
    return MENU[category][menuIndex];
  }

  static #shuffleMenu(menus) {
    const indexArray = Array.from(
      { length: menus.length },
      (_, index) => index
    );
    return Random.shuffle(indexArray)[0];
  }

  static isFoodSafe({ avoidedFoodsArray }, menu) {
    return !avoidedFoodsArray.includes(menu);
  }

  static hasMenu({ menus }, menu) {
    return menus.includes(menu);
  }
}

export default Recommendation;
