import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/index.js';
import InputValidator from '../Validator/InputValidator.js';

const InputView = {
  async readCoachName() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.coachName);
    InputValidator.coach(input);
    return input.split(',').map((name) => name.trim());
  },

  async readAvoidedFood(name) {
    const input = await Console.readLineAsync(INPUT_MESSAGE.avoidedFood(name));
    InputValidator.avoidedFood(input);
    return input.split(',').map((menu) => menu.trim());
  },
};

export default InputView;
