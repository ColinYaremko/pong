import { SVG_NS } from '../settings.js';



export default class Ball {
  
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
    }

    render (svg) {
      
          let ball = document.createElementNS(SVG_NS, 'circle');
          ball.setAttributeNS(null, 'r', this.radius);
          ball.setAttributeNS(null, 'cx', this.boardWidth);
          ball.setAttributeNS(null, 'cy', this.boardHeight);
                    
          ball.setAttributeNS(null, 'fill', 'yellow');
         
          svg.appendChild(ball);
    }




    reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;
    }

}
