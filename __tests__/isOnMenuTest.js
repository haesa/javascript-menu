import isOnMenu from '../src/utils/isOnMenu';

describe('isOnMenu 함수 테스트', () => {
  test('메뉴에 있는 음식인지 확인한다.', () => {
    expect(isOnMenu('쌀국수')).toBe(true);
    expect(isOnMenu('크리스마스파스타')).toBe(false);
  });
});
