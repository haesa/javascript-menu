import { MENU } from '../constants/index.js';

function isOnMenu(menu) {
  const menuValues = Object.values(MENU);
  const completeMenu = menuValues.reduce(
    (result, menus) => result.concat(menus),
    []
  );
  return new Set(completeMenu).has(menu);
}

export default isOnMenu;
