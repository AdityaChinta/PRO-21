var bullet,wall;
var speed,weight;
var deformation;
var thickness;


function setup() {
  createCanvas(1000,400);
  thickness=random(22,83);
  speed=random(10,20);
  weight=random(400,1600);
  bullet=createSprite(50, 200, 50, 50);
  bullet.speed=random(223,321);
  bullet.weight=random(30,52);
  wall=createSprite(970,200,60,250);
  bullet.velocityX=speed;
  ABC=0.5*bullet.weight*bullet.speed*speed*bullet.speed;
  XYZ=thickness*thickness*thickness;
  damage=ABC/XYZ;
  textSize(30);
}

function draw() {
  background("blue");
  bullet.display();
  wall.display();
  if(wall.isTouching(bullet)){
    bullet.velocityX=0;
    text("Damage:"+damage,350,100);
    if(damage>=250){
      wall.shapeColor="red";
    }else{
      wall.shapeColor="green";
    }
  }
  

  drawSprites();

}
