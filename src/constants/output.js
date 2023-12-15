import DAYS from './day.js';

const OUTPUT_MESSAGE = Object.freeze({
  startRecommending: '점심 메뉴 추천을 시작합니다.',
  recommendationResult: '메뉴 추천 결과입니다.',
  days: `[ 구분 | ${DAYS.join(' | ')} ]`,
  category: (category) => `[ 카테고리 | ${category.join(' | ')} ]`,
  result: ({ name, menus }) => `[ ${name} | ${menus.join(' | ')} ]`,
  recommendationCompleted: '추천을 완료했습니다.',
});

export default OUTPUT_MESSAGE;
