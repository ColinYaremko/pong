import { SVG_NS } from '../settings.js';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.speed = 10;  //Weekend stretch
    this.score = 0;




    document.addEventListener('keydown', event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }

    });

  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return { leftX, rightX, topY, bottomY };
  }




  up(){
    //GET MAX NUMBER
    // either 0 or the y position minus the speed

    this.y = this.y - this.speed;
    this.y = Math.max (this.y - this.speed, 0);
    

  }

  down() {
    //GET MIN NUMBER
    //either the height of the board minus the height of the paddle
    // or the y position plus the speed

    this.y = this.y + this.speed;
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }


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