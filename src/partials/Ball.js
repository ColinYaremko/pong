import { SVG_NS } from '../settings.js';



export default class Ball {
  
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;

      this.reset()
    }

    reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;

      this.vy = 0;

      while ( this.vy === 0 ) {
        this.vy = Math.floor(Math.random() * 10 - 5); 
      }
  
      this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    wallCollision() {
      const hitLeft = this.x - this.radius <= 0;
      const hitRight = this.x + this.radius >= this.boardWidth;
      const hitTop = this.y - this.radius <= 0;
      const hitBottom = this.y + this.radius >= this.boardHeight;

      if (hitLeft || hitRight) {
        this.vx = -this.vx;
      } else if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }
    }

    paddleCollision (paddleOne, paddleTwo) {
      if (this.vx > 0) {
        //if detect collision on right side (p2)
        let paddle = paddleTwo.coordinates(paddleTwo.x, paddleTwo.y, paddleTwo.width, paddleTwo.height);
        let [leftx, rightx, topY, bottomY] = paddle;
        
        if (
          //paddles touch
          // right edge of ball >= left edge of paddle
          // ball y is >= paddle top Y
          // ball y is <= paddle bottom Y
          this.x + this.radius >= leftx
          && this.y >= topY
          && this.y <= bottomY

        ) {
          this.vx = -this.vx;
        }
         
      } else {
          
            let paddle = paddleOne.coordinates(paddleOne.x, paddleOne.y, paddleOne.width, paddleOne.height);
            let [leftx, rightx, topY, bottomY] = paddle;
          if (
            //detect collision on left side
            this.x - this.radius <= rightx
            && this.y >= topY
            && this.y <= bottomY
           ) {
            this.vx = -this.vx
          }
          }
        // if detect collision on left side (p1)

      }
        
      



    



    render (svg, paddleOne, paddleTwo) {
      
          this.y = this.y + this.vy;
          this.x = this.x + this.vx;

          this.wallCollision();
          this.paddleCollision(paddleOne, paddleTwo);

          let ball = document.createElementNS(SVG_NS, 'circle');
          ball.setAttributeNS(null, 'r', this.radius);
          ball.setAttributeNS(null, 'cx', this.x);
          ball.setAttributeNS(null, 'cy', this.y);          
          ball.setAttributeNS(null, 'fill', 'yellow');
         
          svg.appendChild(ball);
    }





}
