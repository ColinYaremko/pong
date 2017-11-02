import { SVG_NS } from '../settings.js';
import Board from './Board'

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
	
		// Other code goes here...
  this.gameElement = document.getElementById(this.element);
	this.board = new Board(this.width, this.height);

	}

	render() {
		
		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewbox', `0 0 ${this.width} ${this.height}`);
		svg.setAttributeNS(null, 'version', '1.1');
		// More code goes here...
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		

	}

}