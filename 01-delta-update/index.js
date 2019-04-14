/** プレイヤー情報 */
let player = {
  /** x座標 */
  x: 0,
  /** y座標 */
  y: 128
};

/**
 * ゲームループ
 *
 * @param {DOMHighResTimeStamp} time 時間
 */
function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  player.x += 4;
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
