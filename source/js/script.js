// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import {
  cloneUniforms
} from 'three';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();


// new sctipt 0.7.09.2020

window.onload = function () {
  let bodyLoad = document.querySelector('body');
  bodyLoad.classList.add("bodyLoaded");
};


const animated = document.querySelector('.rules__list :nth-child(4)');
animated.addEventListener('animationend', () => {
  document.querySelector('.rules__link').classList.add('acivated');
});
