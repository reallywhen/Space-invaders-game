function setup() {
  createCanvas(500, 900);
}

var img;

function preload() {
  img = loadImage("FW-190 D-9 for game.jpg");
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

var alien = function (x, y, colorR, colorG, colorB) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 70;
  this.speed = 3;
  this.colorR = colorR;
  this.colorG = colorG;
  this.colorB = colorB;
  this.alive = true;
  this.hit = function () {
    if (ship.x > this.x && ship.x < this.x + this.width) {
      this.alive = false;
    }
  };
  this.barrier = function () {
    if (this.x > 450) {
      this.x = 450;
    }

    if (this.x < 0) {
      this.x = 0;
    }
  };
};

var alien1 = new alien(120, 150, 231, 123, 213);
var alien2 = new alien(300, 150, 132, 255, 23);
var alien3 = new alien(390, 150, 170, 1, 254);

var timerNumber = 10;

/*var R = Math.floor(Math.random() * 256);
        var G = Math.floor(Math.random() * 256);
        var B = Math.floor(Math.random() * 256);*/

//universalalienspeed, pretty self explanatory

var alien1Left;

var killNumber = 0;

draw = function () {
  background(130, 130, 130);

  // make ship move left at a constant speed
  if (keyIsDown(65)) {
    ship.x -= 8;
  }

  //make ship move right at a constant speed
  if (keyIsDown(68)) {
    ship.x += 8;
  }
  for (var i = 0; i < LazerXPositions.length; i++) {
    ellipse(LazerXPositions[i], LazerYPositions[i] - 25, 10, 100);
    LazerYPositions[i] += -100;
  }

  for (var i = 0; i < LazerXPositions.length; i++) {
    console.log("hi");
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

  image(img, ship.x, ship.y);
};

var count = 0;
//-----------------------------------🌈🌈🌈RAINBOW AREA🌈🌈🌈-------------------------------------------------------

function keyPressed() {
  alien1.hit();
  alien2.hit();
  if (keyCode === 32) {
    LazerXPositions.push(ship.x);
    LazerYPositions.push(ship.y);
    console.log("asdasid");
  }
}

function randomNumberForAnything(max) {
  return Math.floor(Math.random() * (max + 1));
}

function updateAlien1Pos() {
  // Update the position of alien1
  if (alien1.alive === true) {
    if (randomNumberForAnything(10) > 9) {
      alien1.speed = alien1.speed * -1;
    }

    alien1.x = alien1.x + alien1.speed;
  }
}
function updateAlien2Pos() {
  // Update the position of alien1
  if (alien2.alive === true) {
    if (randomNumberForAnything(10) > 9) {
      alien2.speed = alien2.speed * -1;
    }

    alien2.x = alien2.x + alien2.speed;
  }
}

//makes it so the alien doesnt go otuside the border
function stopIt() {
  alien1.barrier();
  alien2.barrier();
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
  if (killNumber < 19 && timerNumber < 1) {
    background(0, 0, 0);
    fill(255, 0, 0);
    text("lmao you suck at this game", 250, 350);
    fill(0, 0, 0);
  }
}
function winScreen() {
  if (killNumber > 19) {
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
    rect(alien1.x, alien1.y, alien1.width, alien1.height);
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
