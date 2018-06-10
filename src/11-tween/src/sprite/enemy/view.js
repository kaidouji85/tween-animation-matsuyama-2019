export class EnemyView {
  constructor() {
    this.enemyImg = document.createElement('div');
    this.enemyImg.setAttribute('class', 'enemy');
    document.body.appendChild(this.enemyImg);
  }

  engage({x, y}) {
    const ex = this.x - this.enemyImg.clientWidth / 2;
    const ey = this.y - this.enemyImg.clientHeight / 2;
    const transform = `translate(${ex}px, ${ey}px)`;
    this.enemyImg.style.setProperty('transform', transform);
  }
}