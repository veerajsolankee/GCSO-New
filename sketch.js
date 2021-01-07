//To declare the variables.
var car,wall;
var speed,weight;
var deformation;

function setup()
{
  //To create the canvas with the values shown below(1600,400).
  createCanvas(1600,400);

  //To create a sprite named car.
  car=createSprite(50,200,30,30);

  //To create a sprite named wall.
  wall=createSprite(800,200,60,height/2);
  wall.shapeColor="80,80,80";

  //To give values to the variables- speed and weight.
  speed=random(55,90);
  weight=random(400,1500);
 
}

function draw()
{
  background("DarkViolet");

  //To assign the velocity to the car as the sprite named speed.
  car.velocityX=speed;
  
  //To  detect the collision of the car with the wall.
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;

    //To give the values to the variable named deformation.
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(255,255,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
 
  // To show the sprites/ to draw them indirectly.
  drawSprites(); 
}