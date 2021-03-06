# Pong Game

A basic pong game using SVGs all rendered through Javascript.

Adaptations made to the game:
* Gave some nicer colors and moved the placement of the scoreboard.
* Reversed the direction so that no matter who scores, the ball will start going to player 1.
* Addition of a second larger ball at normal speed.
* Play Pong-02.wav for the left side paddle collision (player 1).
* Play Pong-03.wav for the wall collision.
* Speed of the paddle movement increase to half the height of the paddle per key press.
* Increase the speed of the original small ball by rendering it twice.
* Created a "lonely" mode for player 1 and/or player 2.  Move the player two paddle to the top of the screen and push the 'l' key.  The paddle will now be the full height and the game only requires a player one.  The same can be done if someone wants to use player two.  Move the player one paddle to the top of the screen and the key 'x' will make the player one paddle the full size. Pressing the 'n' key will normalize both paddles.

![pong image](https://user-images.githubusercontent.com/32310250/33283894-2314eb0e-d362-11e7-9578-029ccf119095.PNG)


Hosted :  https://colinyaremko.github.io/pong/

## Setup

**Install dependencies:**

`> npm install`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> webpack -p`

## Keys

* Space bar: pause and unpause game

* l : player 2 lonely mode 
* x : player 1 lonely mode
* n : Normalize paddles

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

# Current hurdles

* Still need to understand javascript better.  More reading and practice.

## Observations

* Interesting to see the use of JS to take a completely empty HTML page and make it come to life.  Definitive positive aspects for that until the point of loading the page full of JS where it affects the load times and makes it slower and more of a memory hog.

* Still an interesting project.