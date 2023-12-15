import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/index.js';

const OutputView = {
  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.startRecommending);
  },

  printResult(result, category) {
    OutputView.printNewLine();
    Console.print(OUTPUT_MESSAGE.recommendationResult);
    Console.print(OUTPUT_MESSAGE.days);
    Console.print(OUTPUT_MESSAGE.category(category));
    result.forEach((coach) => Console.print(OUTPUT_MESSAGE.result(coach)));
    OutputView.printNewLine();
    Console.print(OUTPUT_MESSAGE.recommendationCompleted);
  },

  printErrorMessage(error) {
    Console.print(error.message);
  },

  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
