/*The covid virus is getting to you! Shoot it with the vaccine to keep yourself safe! To get more vaccines, press 
space key. */ 

const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Render = Matter.Render;
const Constraint=Matter.Constraint;


//variables
var myEngine, myWorld ;
var vac;
var r;
var you;
var ground;
var corona1, corona2,corona3,corona4,corona5;

//SETUP
function setup() {

  createCanvas(1000,500);
  myEngine = Engine.create ();
  myWorld = myEngine.world;

  //render display
  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });

  ground=new Ground(500,500,1000,20);

  //create vaccine
  vac=new Vaccine (370,250);

  //create rope and connect to vaccine
  r=new rope(vac.body, {x: 370, y:235});

  //create You
  you=new You(70,250);

  //create corona virus
  corona1=new Virus(850,250);
  corona2=new Virus(750,100);
  corona3=new Virus(920,100);
  corona4=new Virus(750,400);
  corona5=new Virus(920,400);

  //run engine and render
  Engine.run(myEngine);
	Render.run(render);

}

//DRAW
function draw() {

  background("white");  

  //display ground
  ground.display();

  //display you
  you.display();

  //display vaccines
  vac.display();
  
  //display ropes
  r.display();
  
  
  //display corona virus
  corona1.display();
  corona2.display();
  corona3.display();
  corona4.display();
  corona5.display();

  //detec collison function
  detectCollision (vac, corona1);
  detectCollision (vac, corona2);
  detectCollision (vac, corona3);
  detectCollision (vac, corona4);
  detectCollision (vac, corona5);

  //code to detect destruction virus
  var object1, object2, object3, object4, object5;
  object1 = Matter.Composite.get (myWorld, corona1.body.id, corona1.body.type);
  object2 = Matter.Composite.get (myWorld, corona2.body.id, corona2.body.type);
  object3 = Matter.Composite.get (myWorld, corona3.body.id, corona3.body.type);
  object4 = Matter.Composite.get (myWorld, corona4.body.id, corona4.body.type);
  object5 = Matter.Composite.get (myWorld, corona5.body.id, corona5.body.type);
 
  //code to display text of destruction of virus
  if (!object1 && !object2 && !object3 && !object4 && !object5) {
    textSize (20);
    stroke ("red");
    text ( "VIRUS DESTROYED ... YOU are SAFE !!", 350,250);
  }


}


function mouseDragged(){
	
	Matter.Body.setPosition (vac.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	
	r.fly();
}

//function to detect collision of corona and vaccine
function detectCollision(lvaccine, lcorona){
    
    var coronaBodyPosition=lcorona.body.position;
    var vaccineBodyPosition=lvaccine.body.position;

    //distance variable
    var distance =dist (vaccineBodyPosition.x, vaccineBodyPosition.y, coronaBodyPosition.x, coronaBodyPosition.y);

    if (distance<=lcorona.width+lvaccine.width){
      Matter.Body.setStatic(lcorona.body,false);  
    }

}

function keyPressed(){
	
	if (keyCode===32){

		Matter.Body.setPosition(vac.body, {x: 370, y: 250});
		r.attach(vac.body);
		
	}

}
