# Pong Game

A basic pong game using SVGs all rendered through Javascript.

Adaptations made to the game:
* Gave some nicer colors and moved the placement of the scoreboard.
* Reversed the direction so that no matter who scores, the ball will start going to player 1.
* Addition of a second larger ball.
* Play Pong-02.wav for the left side paddle collision.
* Play Pong-03.wav for the wall collision.
* Speed of the paddle movement increase to have the height of the paddle per key press.
* Increase the speed of the original small ball by rendering it twice.
* Creates a "lonely" mode for player 1 and player 2.  Move the player two paddle to the top of the screen and push the 'l' key.  The paddle will now be the full height and the game only requires a player one.  The same can be done if someone wants to use player two.  Move the player one paddle to the top of the screen and the key 'x' will make the player one paddle the full size. Pressing the 'n' key will normalize both paddles.


** pong image included (pong image.png)**


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

