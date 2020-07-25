/** @type {HTMLElement} */
let RESPONSIVE_MENU = null;

function initReponsiveMenu(menuId) {
  RESPONSIVE_MENU = document.getElementById(menuId);

  if (!RESPONSIVE_MENU) {
    throw 'Responsive menu does not exist';
  }

  // stops closing menu on click
  RESPONSIVE_MENU.querySelector('.responsive-menu-container').addEventListener('click', e =>
    e.stopPropagation()
  );

  const menuOpenControls = [...document.getElementsByClassName('js-responsive-nav-open')];
  menuOpenControls.forEach(element => element.addEventListener('click', onOpenMenu));

  const menuCloseControls = [...document.getElementsByClassName('js-responsive-nav-close')];
  menuCloseControls.forEach(element => element.addEventListener('click', onCloseMenu));
}

export default initReponsiveMenu;

/**
 *
 * @param {MouseEvent} e
 */
function onOpenMenu(e) {
  e.stopPropagation();
  openMenu();
}

function openMenu() {
  RESPONSIVE_MENU.classList.add('show');
}

/**
 *
 * @param {MouseEvent} e
 */
function onCloseMenu(e) {
  e.stopPropagation();
  closeMenu();
}

function closeMenu() {
  RESPONSIVE_MENU.classList.remove('show');
}
