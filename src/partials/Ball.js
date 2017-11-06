import { SVG_NS } from '../settings.js';

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.ping = new Audio('public/sounds/pong-01.wav');
    this.ping2 = new Audio('public/sounds/pong-02.wav');
    this.bang = new Audio('public/sounds/pong-03.wav');

    this.reset()
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollision(paddleOne, paddleTwo) {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if (hitLeft) {
      this.direction = -1;
      this.goal(paddleTwo);
    } else if (hitRight) {
      this.direction = -1;
      this.goal(paddleOne);
    } else if (hitTop || hitBottom) {
      this.bang.play();
      this.vy = -this.vy;
    }
  }

  paddleCollision(paddleOne, paddleTwo) {
    if (this.vx > 0) {
      // If detect collision on right side (p2)
      let paddle = paddleTwo.coordinates(paddleTwo.x, paddleTwo.y, paddleTwo.width, paddleTwo.height);
      let {
        leftX,
        topY,
        bottomY
      } = paddle;
      if (
        this.x + this.radius >= leftX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.vx = -this.vx;
        this.ping.play();
      }
    } else {
      let paddle = paddleOne.coordinates(paddleOne.x, paddleOne.y, paddleOne.width, paddleOne.height);
      let { rightX, topY, bottomY } = paddle;
      if (
        //detect collision on left side (p1)
        this.x - this.radius <= rightX &&
        this.y >= topY &&
        this.y <= bottomY
      ) {
        this.vx = -this.vx
        this.ping2.play();
      }
      }
  }

  goal(paddle) {
    paddle.score += 1;
    this.reset();
  }

  render(svg, paddleOne, paddleTwo) {

    this.y = this.y + this.vy;
    this.x = this.x + this.vx;
    this.wallCollision(paddleOne, paddleTwo);
    this.paddleCollision(paddleOne, paddleTwo);

    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius);
    ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);
    ball.setAttributeNS(null, 'fill', 'yellow');
    svg.appendChild(ball);
  }
}