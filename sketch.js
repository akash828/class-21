const Bodies= Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var myEngine,myWorld;
var ground;

function setup() {
  createCanvas(400,400);

 myEngine= Engine.create();// myEngine.world;
  myWorld=myEngine.world;

  var options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,10,options)
  World.add(myWorld,ground);
  console.log(ground.position)

  var ball_option = {
   restitution:1

  }
  ball = Bodies.circle(200,200,50,ball_option);
  World.add(myWorld,ball);
}

function draw() {
  background("blue");  

  Engine.update(myEngine);
  fill("brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  fill("white");
  circle(ball.position.x,ball.position.y,50)
  
}