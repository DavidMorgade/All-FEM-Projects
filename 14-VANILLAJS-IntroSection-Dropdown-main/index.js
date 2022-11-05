'use strict';

const menu = document.querySelector('.menu');
const backdrop = document.querySelector('.backdrop');
const lateralMenu = document.querySelector('.menu__container');
const featuresLink = document.querySelector('.menu__features');
const companyLink = document.querySelector('.menu__company');
const buttons = document.querySelector('.menu__buttons');
const allLinks = document.querySelector('.menu__list');
const featuresMenu = document.querySelector('.features');
const companyMenu = document.querySelector('.company');
// Desktop selectors
const featuresLinkDesktop = document.querySelector('.menu__features--desktop');
const featuresMenuDesktop = document.querySelector('.features--desktop');
const companyLinkDesktop = document.querySelector('.menu__company--desktop');
const companyMenuDesktop = document.querySelector('.company--desktop');
// Footer Selector
const footerText = document.querySelector('.footer__text');
// Wait for browser to fully load
document.addEventListener('DOMContentLoaded', function () {
  loadApp();
});
// Init function that executes all sub-functions
const loadApp = () => {
  openModal(menu);
  openModal(backdrop);
  openSubMenus(featuresLink, featuresMenu);
  openSubMenus(companyLink, companyMenu);
  openSubMenus(featuresLinkDesktop, featuresMenuDesktop);
  openSubMenus(companyLinkDesktop, companyMenuDesktop);
  typeWriter(footerText);
};
// Open modal functions
const openModal = (clickedItem) => {
  clickedItem.addEventListener('click', () => {
    menu.classList.toggle('opened');
    backdrop.classList.toggle('active');
    lateralMenu.classList.toggle('active__lateral');
    buttons.classList.toggle('active__flex');
    allLinks.classList.toggle('active__flex');
  });
};
// Open Sub-menus
const openSubMenus = (link, menu) => {
  link.addEventListener('click', () => {
    link.classList.toggle('rotate');
    menu.classList.toggle('submenu__active');
  });
};

// Footer typewriter effect
function typeWriter(el) {
  const textArray = el.innerHTML.split('');
  el.innerHTML = '';
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 95 * i)
  );
}
