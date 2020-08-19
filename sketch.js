
var ground, gameState
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
        gameState = "play"
	engine = Engine.create();
	world = engine.world

	dustbin = new DustBin(720, 490, 150, 10)
	paper = new Paper(100,350,10)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    keyPressed();
	Engine.run(engine);
  
}


function draw() {
  if(keyCode === UP_ARROW){
  gameState = "play"
  }
  if(gameState === "play"){
  rectMode(CENTER);
  background(255);
  createEdgeSprites();
  dustbin.display();
  paper.display();
  drawSprites();
  }
}


function keyPressed() {
 if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y:-15});
  }
}




