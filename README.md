# Pong Game

A basic pong game using SVGs all rendered through Javascript.

Adaptations made to the game:
* Addition of a second larger ball.
* Speed of the paddle movement increase to have the height of the paddle per key press.
* Increase the speed of the original small ball by rendering it twice.
* Attempted to create a P2 lazy mode with the "l" keypress where the paddle would increase to full boardheight.  Had issues where it wouldn't detect the ball collision and the rendering.  Code left in place as it didn't affect the game play.  Commented out where gameplay was affected.


** pong image included **


## Setup

**Install dependencies:**

`> npm install`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> webpack -p`

## Keys

* Space bar: pause and unpause game

* l : supposed to be for player 2 lazy mode (issues with collision and render)

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲: up
* ▼: down


## Technology used

* HTML, CSS, SVG, Javascript, npm, webpack, GIT

## Built With

* Visual Studio Code - The "Editor" - https://code.visualstudio.com/

* Chrome - Testing platform - Google.ca

* Webpack - Issues and all.

* GIT - github


## Contributing voices and ideas

* wdp-fall-2017 classmates

* RED Academy

* Mandi Wise

* Jim Bennett

## Authors

* Colin Yaremko - blood, sweat and tears without sleep

* Red Academy project slides

* See also the list of contributors who participated in this project.

