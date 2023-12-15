import { MENU } from '../src/constants/index.js';
import Recommendation from '../src/Domain/Recommendation.js';

describe('Recommendation 클래스 테스트', () => {
  test('카테고리에 해당하는 메뉴 1가지를 뽑는다.', () => {
    const menu = Recommendation.pickMenu('한식');
    expect(MENU['한식'].includes(menu)).toBe(true);
  });

  test('못 먹는 음식인지 확인한다.', () => {
    const coach = {
      name: 'pobi',
      menus: ['김밥', '우동'],
      avoidedFoodsArray: ['깐풍기'],
    };
    expect(Recommendation.isFoodSafe(coach, '오코노미야끼')).toBe(true);
    expect(Recommendation.isFoodSafe(coach, '깐풍기')).toBe(false);
  });

  test('이미 추천한 메뉴인지 확인한다.', () => {
    const coach = {
      name: 'pobi',
      menus: ['김밥', '우동'],
      avoidedFoodsArray: ['깐풍기'],
    };
    expect(Recommendation.hasMenu(coach, '김밥')).toBe(true);
    expect(Recommendation.hasMenu(coach, '쌀국수')).toBe(false);
  });
});
