var runner , runnerimg;
var road,roadimg;
var edges;

function preload(){
  runnerimg = loadAnimation("Runner-1.png","Runner-2.png");
  roadimg = loadImage("path.png");


  //pre-load images
}

function setup(){
  createCanvas(400,600);

  road = createSprite(200,200,400,20)
  road.addImage("moving",roadimg);
  road.scale=1.2
  road.velocityY = 4;

  runner = createSprite(300,350)
  runner.addAnimation("running",runnerimg);
  runner.scale=0.1

  edges = createEdgeSprites();

  //create sprites here
}

function draw() {
  background("white");

  runner.x = World.mouseX

  if(road.y > 400){
    road.y = height/2;
  }
  
  runner.bounceOff(edges);
  drawSprites();

}
