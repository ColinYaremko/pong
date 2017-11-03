import { SVG_NS, KEYS } from '../settings.js';
import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
	
		// Other code goes here...
  this.gameElement = document.getElementById(this.element);
	this.board = new Board(this.width, this.height);

	this.boardGap = 10
	this.paddleWidth = 8
	this.paddleHeight = 56

	this.paddleOne = new Paddle(
		this.height, 
		this.paddleWidth, 
		this.paddleHeight, 
		this.boardGap, 
		(this.height-this.paddleHeight)/2,
		KEYS.a,
		KEYS.z
	);
		
	this.paddleTwo = new Paddle(
		this.height, 
		this.paddleWidth, 
		this.paddleHeight, 
		(this.width-this.paddleWidth-this.boardGap), //mathmetical to get p2 paddle spacing
		(this.height-this.paddleHeight)/2,
		KEYS.up,
		KEYS.down
	);
	
  this.radius = 8	       
	this.boardWidth = 512      
	this.boardHeight = 256   
	
	this.ball = new Ball (
		this.radius,
		this.boardWidth,
	  this.boardHeight
	  
	);
	

	document.addEventListener ('keydown', event => {
		//this 
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
		// More code goes here...
		this.gameElement.appendChild(svg);

		this.board.render(svg);

		this.paddleOne.render(svg);
		this.paddleTwo.render(svg);
		
		this.ball.render(svg, this.paddleOne, this.paddleTwo);

	}

}