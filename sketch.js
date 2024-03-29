const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
function preload()
{
	
	
}

function setup() {
var canvas=	createCanvas(1000, 750);

	

	
	engine = Engine.create();
	world = engine.world;
  block1=new BLOCKPURPLE(350,415,30,50)
  block2=new BLOCKPURPLE(380,415,30,50)
  block3=new BLOCKPURPLE(410,415,30,50)
  block4=new BLOCKPURPLE(440,415,30,50)
  block5=new BLOCKPURPLE(470,415,30,50)
  block6=new BLOCKPURPLE(500,415,30,50)
  block7=new BLOCKPURPLE(530,415,30,50)
  block8=new BLOCKPINK(380,365,30,50)
  block9=new BLOCKPINK(410,365,30,50)
  block10=new BLOCKPINK(440,365,30,50)
  block11=new BLOCKPINK(440,365,30,50)
  block12=new BLOCKPINK(500,365,30,50)
  block13=new BLOCKYELLOW(410,315,30,50)  
  block14=new BLOCKYELLOW(440,315,30,50)  
  block15=new BLOCKYELLOW(470,315,30,50)  
  block16=new BLOCKBLUE(440,265,30,50)
	stand=new STAND(450,450,300,30)
  stand2=new STAND(800,200,150,30)
  block17=new BLOCKYELLOW(750,150,30,50)
  block18=new BLOCKYELLOW(780,150,30,50)
  block19=new BLOCKYELLOW(810,150,30,50)
  block20=new BLOCKYELLOW(840,150,30,50)
  block21=new BLOCKPINK(780,100,30,50)
  block22=new BLOCKPINK(810,100,30,50)
  block23=new BLOCKPURPLE(800,50,30,50)
  ground=new GROUND(500,740,1000,20)
  ball1=new Ball(200,300,20)
  sling=new SlingShot(ball1.body,{x:100,y:500})
	Engine.run(engine);

}


function draw() {
  background('brown');

 
  
  //write code to stop star in the hand of fairy
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
stand2.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
stand.display();
ground.display();
ball1.display();
sling.display();

  drawSprites();
Engine.update(engine)
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}