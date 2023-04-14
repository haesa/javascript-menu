const Recommendation = require('../src/Recommendation');
const { ERROR_MESSAGE } = require('../src/Constants');
const coaches = [
  { name: '토미', dislikeFoods: ['우동', '스시'], recommendedFoods: [] },
  { name: '제임스', dislikeFoods: ['뇨끼', '월남쌈'], recommendedFoods: [] },
  {
    name: '포코',
    dislikeFoods: ['마파두부', '고추잡채'],
    recommendedFoods: [],
  },
];

describe('코치 입력 예외 테스트', () => {
  test('코치의 이름은 최소 2글자, 최대 4글자이다.', () => {
    expect(() => {
      const recommendation = new Recommendation(coaches);
      recommendation.recommend();
      return recommendation.pickedCategory.length;
    }).toEqual(5);
  });
});
