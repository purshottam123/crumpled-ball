const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
   
  var ballOptions={
    restitution:1,
    frictionAir:0.01,
    
  }
  ball=Bodies.circle(125,200,15,ballOptions)
  World.add(world,ball)

  bottom=new Ground(400,370,800,10)
  wall=new Ground(400,30,800,10)
  rwall=new Ground(650,315,10,100)
  lwall=new Ground(20,200,10,400)
  swall=new  Ground(750,315,10,100)
  awall=new Ground(775,200,10,400)

  button1=createImg("push.png")
  button1.position(20,10)
  button1.size(50,50)
  button1.mouseClicked(hForce)

 
}

function draw() 

{

  background(51);
  Engine.update(engine);
  bottom.display()
  wall.display()
  rwall.display()
  lwall.display()
  swall.display()
  awall.display()

  ellipse(ball.position.x,ball.position.y,15,15)
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
