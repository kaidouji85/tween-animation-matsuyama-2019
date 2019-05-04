import * as TWEENJS from '@tweenjs/tween.js';

/** プレイヤーの移動に関するTween */
const playerMoveTween = new TWEENJS.Group();

/** プレイヤーが1/1000秒間で移動する距離 */
const playerMoveSpeed = 512 / 1000;

/** プレイヤー情報 */
const player = {
  /** x座標 */
  x: 0,
  /** y座標 */
  y: 128
};

/** メイン関数 */
window.onload = () => {
  document.addEventListener('mousemove', e => {
    movePlayer({x: e.clientX, y: e.clientY});
  });
};

/**
 * ゲームループ
 *
 * @param {DOMHighResTimeStamp} time 時間
 */
function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  playerMoveTween.update(time);
  setPlayerPosition(player);
}
requestAnimationFrame(gameLoop);

/**
 * プレイヤーを指定した位置に移動させる
 *
 * @param x 移動先X座標
 * @param y 移動先Y座標
 */
function movePlayer({x, y}) {
  playerMoveTween.update();
  playerMoveTween.removeAll();

  const distance = Math.sqrt(Math.pow(player.x - x, 2) + Math.pow(player.y - y , 2));
  const duration = distance / playerMoveSpeed;
  const tween = new TWEENJS.Tween(player, playerMoveTween)
    .to({x: x, y: y}, duration);
  tween.start();
}

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
