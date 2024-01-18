       

function setup() {
 createCanvas(500, 700);




}
//bullet x and y positions 
var LazerXPositions = [];
var LazerYPositions = [];

 //position of my aircraft
 var ship = {
   x: 150,
   y: 650
 }

 // positions of fmy alien
 /*var alien.x = 120
 var alien.y = 150*/

 var alien = {
   x:120,
   y:150,
   color:"white"

 }

 draw = function() {

   background("grey");




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
     LazerYPositions[i] += -34
   }

   



   
   ellipse(ship.x, ship.y, 50)

   //left border of the "arena"
   if (ship.x < 10) {

     ship.x = 10;

   }
   if (ship.x > 490) {
     ship.x = 490;

   }

   // make it so that the space bar activates its so its not aa lazer

   myShape();

   drawAlienWithGreyOrRedIfAboveShip();

 }



 function keyPressed() {
   if (keyCode === 32) {

     LazerXPositions.push(ship.x);
     LazerYPositions.push(ship.y);
   }

 }
 function drawAlienWithGreyOrRedIfAboveShip(){
  if (ship.x > alien.x && ship.x < alien.x + 50 && keyCode === 32){
    alien.color = "red";
    fill(alien.color);
    rect(alien.x, alien.y, 50, 70);
    fill("white");
  }
  else{
 fill(alien.color);
 rect(alien.x, alien.y, 50, 70);
 fill("white");
 }
}


 var myShape = function (){
  rect(24,24,24,24);
  console.log("aslndlaskndlasdnlksad")
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



 //mechanics
 //start screen (press "x" to start)
 //death screen (you lasted "x" waves/enemies/killcount)
 // f16 png https://imgur.com/xNeYfwT


 //if ship x = alien.x >/< some number then make alein dissappear
