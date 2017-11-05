import {
	SVG_NS,
	KEYS
} from '../settings.js';
import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'
import Score from './Score'

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);

		this.boardGap = 10
		this.paddleWidth = 8
		this.paddleHeight = 56
		this.paddleOne = new Paddle( // Player 1
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z
		);

		this.paddleTwo = new Paddle( //Player 2
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.paddleWidth - this.boardGap), //mathmetical to get p2 paddle spacing
			(this.height - this.paddleHeight) / 2,
			KEYS.up,
			KEYS.down
		);

		this.paddleThree = new Paddle( //Player 2 - large paddle
			this.height,
			this.paddleWidth,
			231, // new paddle Height for lazy mode
			(this.width - this.paddleWidth - this.boardGap), //mathmetical to get p3 paddle spacing
			0, 
			KEYS.up,
			KEYS.down
		);

		document.addEventListener('keydown', event => {  // Not totally sure how to tie it into the rendering
			if (event.key === KEYS.l) {                    // to keep it there for the time needed.
				let svg = document.createElementNS(SVG_NS, 'svg');
				this.paddleThree.render(svg);
			}
		});

		this.Score1 = new Score(20, 30, 30); //SCORE
		this.Score2 = new Score(this.width/2 + 20, 30, 30); //SCORE

		this.radius = 8
		this.boardWidth = 512
		this.boardHeight = 256
		this.ball = new Ball(  // small original ball
			this.radius,
			this.boardWidth,
			this.boardHeight
		);

		this.ball2 = new Ball(
			20, // radius of the 2nd ball
			this.boardWidth,
			this.boardHeight
		);

		document.addEventListener('keydown', event => {
			if (event.key === KEYS.spaceBar) {
				this.pause = !this.pause
			}
		});
	}

	render() {
		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewbox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version', '1.1');

		this.gameElement.appendChild(svg);
		this.board.render(svg);

		this.paddleOne.render(svg);
		this.paddleTwo.render(svg);
		//this.paddleThree.render(svg);

		this.ball.render(svg, this.paddleOne, this.paddleTwo, this.paddleThree);
		this.ball.render(svg, this.paddleOne, this.paddleTwo, this.paddleThree);
		this.ball2.render(svg, this.paddleOne, this.paddleTwo, this.paddleThree);		

		this.Score1.render(svg, this.paddleOne.score);
		this.Score2.render(svg, this.paddleTwo.score);


	}
}