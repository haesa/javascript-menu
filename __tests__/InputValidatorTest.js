import { ERROR_MESSAGE } from '../src/constants';
import InputValidator from '../src/Validator/InputValidator';

describe('InputValidator 테스트', () => {
  test('코치 인원은 최소 2명, 최대 5명이어야 한다.', () => {
    expect(() => InputValidator.coach('해사')).toThrow(
      ERROR_MESSAGE.coachCount
    );
    expect(() => InputValidator.coach('포비,해사,우니,콩콩,송송,박박')).toThrow(
      ERROR_MESSAGE.coachCount
    );
  });

  test('코치 이름은 최소 2글자, 최대 4글자여야 한다.', () => {
    expect(() => InputValidator.coach('해사,원')).toThrow(
      ERROR_MESSAGE.coachName
    );
    expect(() => InputValidator.coach('해사,월화수목금')).toThrow(
      ERROR_MESSAGE.coachName
    );
  });
});
