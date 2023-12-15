import Category from '../src/Domain/Category';

describe('Category 클래스 테스트', () => {
  let category;
  beforeEach(() => {
    category = new Category(['중식', '양식', '양식']);
  });

  test('1에서 5까지에 맞춰 순서대로 일식, 한식, 중식, 아시안, 양식이 반환된다.', () => {
    expect(Category.pick(1)).toBe('일식');
  });

  test('뽑을 수 있는 카테고리인지 확인한다.', () => {
    expect(category.canSelectCategory('한식')).toBe(true);
    expect(category.canSelectCategory('양식')).toBe(false);
  });

  test('#categories에 카테고리가 추가된다.', () => {
    expect(category.pushCategory('한식')).toHaveLength(4);
  });
});
