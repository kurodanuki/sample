'use strict';

{
  const btn = document.getElementById('btn') ;

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.15) {
      btn.textContent = '大吉'; // 15%
    } else if (n < 0.30) {
      btn.textContent = '中吉'; // 30%
    } else if (n < 0.4) {
      btn.textContent = '小吉'; // 40%
    } else if (n < 0.30) {
      btn.textContent = '吉'; // 30%
    } else if (n < 0.05) {
      btn.textContent = '凶'; // 5%
    } else {
      btn.textContent = '末吉'; // 
    }
  });
}
