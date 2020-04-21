import { generateTrail } from './trail.js';

/**
 * Adds event delegation for on/off emoji trail toggler
 */
document.querySelector('.toggles').addEventListener('change', e => {
  if (e.target.name === 'emoji-toggle') {
    if (e.target.value === 'on') {
      window.localStorage.setItem('cursor-trail', 'on');
    } else {
      window.localStorage.setItem('cursor-trail', 'off');
    }
  }
});

/**
 * Adds mousemove listener for trail generation
 */
document.addEventListener('mousemove', e => {
  const nomoji = ['A', 'BUTTON', 'INPUT'];

  if (nomoji.includes(e.target.tagName) || window.localStorage.getItem('cursor-trail') === 'off') {
    return;
  }

  generateTrail(e.pageX, e.pageY);
});

/**
 * Sets default state for emoji trail toggle
 */
(() => {
  const emojiTrailState = window.localStorage.getItem('cursor-trail');

  if (!emojiTrailState || emojiTrailState === 'on') {
    document.querySelector('.emoji-toggle-on').checked = true;
    document.querySelector('.emoji-toggle-off').checked = false;
  } else if (emojiTrailState === 'off') {
    document.querySelector('.emoji-toggle-off').checked = true;
    document.querySelector('.emoji-toggle-on').checked = false;
  }
})();
