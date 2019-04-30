/** プレイヤー情報 */
let player = {
  /** x座標 */
  x: 256,
  /** y座標 */
  y: 128
};

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

window.onload = () => {
  setPlayerPosition(player);
};