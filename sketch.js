var sea ; ship 
function preload(){
seaImg.loadImage("sea.png");
ship.loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea.createSprite(60,200,90,90);
  sea.png.addImage(s1,seaImg);
  sea.velocityX=-5
  ship.createSprite(50,190,80,80)
}

function draw() {
  background("blue");
 
drawSprites();
}