function setup() {
  createCanvas(500, 900);
}
//bullet x and y positions
var LazerXPositions = [];
var LazerYPositions = [];

//position of my aircraft
var ship = {
  x: 150,
  y: 650,
};

// positions of fmy alien1
/*var alien1.x = 120
       var alien1.y = 150*/

var alien1 = {
  x: 120,
  y: 150,
  colorR: 231,
  colorG: 123,
  colorB: 213,
  alive: true,
};

var alien2 = {
  x: 300,
  y: 150,
  colorR: 132,
  colorG: 255,
  colorB: 23,
  alive: true,
};

var timerNumber = 10;

/*var R = Math.floor(Math.random() * 256);
        var G = Math.floor(Math.random() * 256);
        var B = Math.floor(Math.random() * 256);*/

//universalalienspeed, pretty self explanitory
var alien1Speed = 3;
var alien2Speed = 3;

var alien1Left;

var killNumber = 0;

draw = function () {
  background(130, 130, 130);

  // make ship move left at a constant speed
  if (keyIsDown(65)) {
    ship.x -= 4;
  }

  //make ship move right at a constant speed
  if (keyIsDown(68)) {
    ship.x += 4;
  }
  for (var i = 0; i < LazerXPositions.length; i++) {
    ellipse(LazerXPositions[i], LazerYPositions[i] - 25, 10, 100);
    LazerYPositions[i] += -80;
  }

  ellipse(ship.x, ship.y, 50);

  //left border of the "arena"
  if (ship.x < 10) {
    ship.x = 10;
  }
  if (ship.x > 490) {
    ship.x = 490;
  }

  // make it so that the space bar activates its so its not aa lazer

  killCounter();
  drawalien1WithGreyOrRedIfAboveShip();
  drawalien2WithGreyOrRedIfAboveShip();
  count = 0;
  updateAlien1Pos();
  updateAlien2Pos();
  stopIt();
  bigCountdownTimer();
  lossScreen();
  winScreen();
};

var count = 0;
//-----------------------------------🌈🌈🌈RAINBOW AREA🌈🌈🌈-------------------------------------------------------

function keyPressed() {
  if (keyCode === 32 && ship.x > alien1.x && ship.x < alien1.x + 50) {
    alien1.alive = false;
  }
  if (keyCode === 32 && ship.x > alien2.x && ship.x < alien2.x + 50) {
    alien2.alive = false;
  }
  if (keyCode === 32) {
    LazerXPositions.push(ship.x);
    LazerYPositions.push(ship.y);
  }
}

function randomNumberForAnything(max) {
  return Math.floor(Math.random() * (max + 1));
}

function updateAlien1Pos() {
  // Update the position of alien1
  if (alien1.alive === true) {
    if (randomNumberForAnything(10) > 9) {
      alien1Speed = alien1Speed * -1;
    }

    alien1.x = alien1.x + alien1Speed;
  }
}
function updateAlien2Pos() {
  // Update the position of alien1
  if (alien2.alive === true) {
    if (randomNumberForAnything(10) > 9) {
      alien2Speed = alien2Speed * -1;
    }

    alien2.x = alien2.x + alien2Speed;
  }
}

//makes it so the alien doesnt go otuside the border
function stopIt() {
  if (alien1.x > 450) {
    alien1.x = 450;
  }
  if (alien1.x < 0) {
    alien1.x = 0;
  }
  if (alien2.x > 450) {
    alien2.x = 450;
  }
  if (alien2.x < 0) {
    alien2.x = 0;
  }
}

function bigCountdownTimer() {
  if (randomNumberForAnything(100) > 99) {
    timerNumber = timerNumber - 1;
  }
  if (timerNumber < 0) {
    timerNumber = timerNumber + 1;
  }
  text(timerNumber, 350, 30);
}

function killCounter() {
  if (alien1.alive === false || alien2.alive === false) {
    killNumber = killNumber + 1;
    console.log("ekjasdaksd");
  }
  text(killNumber, 200, 30);
}
function lossScreen() {
  if (killNumber < 20 && timerNumber < 1) {
    background(0, 0, 0);
    fill(255, 0, 0);
    text("lmao you suck at this game", 250, 350);
    fill(0, 0, 0);
  }
}
function lossScreen() {
  if (killNumber < 5 && timerNumber < 1) {
    background(0, 0, 0);
    fill(255, 0, 0);
    text("lmao you suck at this game", 250, 350);
    fill(0, 0, 0);
  }
}
function winScreen() {
  if (killNumber > 5) {
    background(0, 255, 0);
    fill(0, 0, 0);
    text("generational prodigy", 250, 350);
    fill(0, 0, 0);
  }
}

//--------------------------------------ALIEN 1--------------------------------------------------------

function drawalien1WithGreyOrRedIfAboveShip() {
  if (alien1.alive === true) {
    fill(alien1.colorR, alien1.colorG, alien1.colorB);
    rect(alien1.x, alien1.y, 50, 70);
    fill(255, 255, 255);
  }
  if (alien1.alive === false) {
    alien1.x = randomNumberForAnything(490);
    alien1.colorR = random(0, 255);
    alien1.colorG = random(0, 255);
    alien1.colorB = random(0, 255);

    alien1.y = randomNumberForAnything(490);
    alien1.alive = true;
  }
}

//--------------------------------------ALIEN 2--------------------------------------------------------

function drawalien2WithGreyOrRedIfAboveShip() {
  if (alien2.alive === true) {
    fill(alien2.colorR, alien2.colorG, alien2.colorB);
    rect(alien2.x, alien2.y, 50, 70);
    fill(255, 255, 255);
  }
  if (alien2.alive === false) {
    alien2.x = randomNumberForAnything(490);
    alien2.colorR = random(0, 255);
    alien2.colorG = random(0, 255);
    alien2.colorB = random(0, 255);

    alien2.y = randomNumberForAnything(490);
    alien2.alive = true;
  }
}

// it reset c when an arrow key is realeased

//image(getImage("Pictures/ship"), 100, 100);

// what do i need to make this game work?
// 1. model of my aircraft, an image
// 1.1 make it move "x-wise" off of keyboard commands "a,d"
//2. bullets or projectiles my aircraft will be firing
// 2.2 fire bullets with keyoard command "w"
//3. enemies that disappear when my projectile collides with them
//4.a background, preferablly creating the illusion on movement but not nessasary
//make it come back alive in white somewherer else

//mechanics
//start screen (press "x" to start)
//death screen (you lasted "x" waves/enemies/killcount)
// f16 png https://imgur.com/xNeYfwT

//if ship x = alien1.x >/< some number then make alein dissappear

// 10 seconds
// 20 squares of randoim colors
//more spawn as they get shot
// 10 seconds
// how many can you shoot before the time runs out
//timer
//quota
// gets harder rounds
// drw= function called every frame, make it called every 30 fromes, then reset.
//
