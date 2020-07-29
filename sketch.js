const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  block1 = new Block(400,275,30,50);
  block2 = new Block(369,275,30,50);
  block3 = new Block(338,275,30,50);
  block4 = new Block(431,275,30,50);
  block5 = new Block(462,275,30,50);
  block6 = new Block(493,275,30,50);
  block7 = new Block(415,225,30,50);
  block8 = new Block(384,225,30,50);
  block9 = new Block(353,225,30,50);
  block10 = new Block(446,225,30,50);
  block11 = new Block(477,225,30,50);
  block12 = new Block(461,175,30,50);
  block13 = new Block(430,175,30,50);
  block14 = new Block(399,175,30,50);
  block15 = new Block(368,175,30,50);
  block16 = new Block(445,125,30,50);
  block17 = new Block(414,125,30,50);
  block18 = new Block(383,125,30,50);
  block19 = new Block(429,75,30,50);
  block20 = new Block(398,75,30,50);

  ground1 = new Ground(400,300);

  ball = new Ball(100,200);

  slingShot = new SlingShot(ball.body,{x: 100,y: 200});

  Engine.run(engine);


}

function draw() {
  background(255,255,255);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  ground1.display();
  ball.display();

  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   slingShot.attach(ball.body);
  }
}