/** プレイヤー情報 */
let player = {
  /** x座標 */
  x: 0,
  /** y座標 */
  y: 128
};

/** 上に移動しているかのフラグ、trueで上に移動している */
let isUpMove = true;

/** Y軸移動制御用カウンタ */
let inYAxisMoveCycleCount = 0;

/**
 * ゲームループ
 *
 * @param {DOMHighResTimeStamp} time 時間
 */
function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  player.x += 4;
  player.y += isUpMove ? 4 : -4;

  inYAxisMoveCycleCount ++;
  if (30 <= inYAxisMoveCycleCount) {
    isUpMove = !isUpMove;
    inYAxisMoveCycleCount = 0;
  }

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
