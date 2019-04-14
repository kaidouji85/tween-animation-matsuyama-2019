import * as TWEENJS from '@tweenjs/tween.js';

/** プレイヤー情報 */
let player = {
  /** x座標 */
  x: 0,
  /** y座標 */
  y: 128
};

/** メイン関数 */
window.onload = () => {
  const animation = new TWEENJS.Tween(player)
    .to({x: '+200'}, 1000)
    .repeat(Infinity);
  animation.start();
};

/**
 * ゲームループ
 *
 * @param {DOMHighResTimeStamp} time 時間
 */
function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  TWEENJS.default.update(time);
  setPlayerPosition(player);
}
requestAnimationFrame(gameLoop);

/**
 * プレイヤー画像を指定した位置に配置する
 *
 * @param {number} x x座標
 * @param {number} y y座標
 */
function setPlayerPosition({x, y}) {
  const playerImg = document.querySelector('.player');
  const transform = `translate(${x}px, ${y}px)`;
  playerImg.style.setProperty('transform', transform);
}
