import { ERROR_MESSAGE } from '../constants/index.js';
import isOnMenu from '../utils/isOnMenu.js';

const InputValidator = {
  coach(input) {
    const names = input.split(',').map((name) => name.trim());
    if (names.length < 2 || names.length > 5) {
      throw new Error(ERROR_MESSAGE.coachCount);
    }

    if (names.some((name) => name.length < 2 || name.length > 4)) {
      throw new Error(ERROR_MESSAGE.coachName);
    }
  },

  avoidedFood(input) {
    const menus = input.split(',').map((menu) => menu.trim());
    if (menus.some((menu) => !isOnMenu(menu))) {
      throw new Error(ERROR_MESSAGE.avoidedFood);
    }
  },
};

export default InputValidator;
