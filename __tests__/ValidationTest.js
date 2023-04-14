const Validation = require('../src/Validation');
const { ERROR_MESSAGE } = require('../src/Constants');

describe('코치 입력 예외 테스트', () => {
  test('코치의 이름은 최소 2글자, 최대 4글자이다.', () => {
    expect(() => {
      Validation.coach(['안', '포코']);
    }).toThrow(ERROR_MESSAGE.NAME_LENGTH);

    expect(() => {
      Validation.coach(['포코', '안젤리나 졸리']);
    }).toThrow(ERROR_MESSAGE.NAME_LENGTH);
  });

  test('코치는 최소 2명, 최대 5명까지 식사를 함께 한다.', () => {
    expect(() => {
      Validation.coach(['포코']);
    }).toThrow(ERROR_MESSAGE.COACH_NUMBER);

    expect(() => {
      Validation.coach(['포코', '토미', '제임스', '포비', '포터', '세베루스']);
    }).toThrow(ERROR_MESSAGE.COACH_NUMBER);
  });
});

describe('못 먹는 음식 입력 예외 테스트', () => {
  test('못 먹는 메뉴는 최소 0개, 최대 2개이다.', () => {
    expect(() => {
      Validation.food(['마라탕', '라면', '닭가슴살']);
    }).toThrow(ERROR_MESSAGE.FODDS_LENGTH);
  });
});
