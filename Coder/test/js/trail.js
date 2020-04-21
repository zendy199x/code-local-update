function getRandomEmoji() {
  // prettier-ignore
  const emoji = [
    '☀️', '☁️', '❄️', '⚡️', '🌊', '🐱', '🐶', '🐭', '🐹', '🐰', '🐯', '🐨', '🐻', '🐷', '🐮', '🐗', '🐵', '🐒', '🐴', '🐎', '🐫','🐑', '🐘',
    '🐼', '🐍', '🐦', '🐤', '🐥', '🐣', '🐔', '🐧', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐠', '🐟', '🐳', '🐋', '🐬', '🐅', '🐓', '🐕',
    '🐖', '🐡', '🐊', '🐈', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🍄', '🌵', '🌴', '🌲', '🌳', '🌱', '🌼', '🌓',
    '🌕', '🌜', '🌛', '🌔', '🌍', '🌎', '🌏', '🌋', '⛅️', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚',
    '🍜', '🍲', '🍢', '🍡', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇',
    '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '✨'
  ];

  return emoji[Math.floor(Math.random() * emoji.length)];
}

function generateTrail(x, y) {
  const e = document.createElement('span');
  e.classList.add('✨');
  e.style = `transform: translate3d(${x}px, ${y}px, 0);`;
  e.textContent = getRandomEmoji();

  document.body.appendChild(e);

  setTimeout(() => {
    document.body.removeChild(e);
  }, 500);
}

export { generateTrail };
