import { SVG_NS } from '../settings.js';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.speed = 27; //Stretch from 10.  Just seems to move the paddle faster (27 is half paddle height)
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
        // case large:
        //   this.large();  
      }
    });
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return {
      leftX,
      rightX,
      topY,
      bottomY
    };
  }

  up() {
    this.y = this.y - this.speed;
    this.y = Math.max(this.y - this.speed, 0);
  }

  down() {
    this.y = this.y + this.speed;
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }

  // large() {
  //   this.paddleThree.height = 231
  // }

  render(svg) {

    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'fill', 'red');
    svg.appendChild(rect);
  }
}