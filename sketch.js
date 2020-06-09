var thickness,wall;

var bullet,speed,weight;                    

function setup() {
  createCanvas(1600,400);
  thickness=random(20,83);
  speed=random(0,100);
  weight=random(30,52);

  bullet=createSprite(50,200,50,20);
  bullet.shapeColor="white"

  wall = createSprite(500,200,thickness,height/2);
  
 
                                                                    

  bullet.velocityX=speed;
}
function draw() {                                
 background("green");  
  





  

//car.hasCollided=wall;



  drawSprites();
}
function hasCollided(Lbullet,Lwall){


         bulletRjghtEdge=Lbullet.x+Lbullet.width;
         wallLeftEdge=Lwall.x;
         if(bulletRightEdge>=wallLeftEdge)
         {
           return true
         }
         if(hasCollided(bullet,wall))
         {
           bullet.velocityX=0;
           var damage=0.5 * weight * speed * speed(thickness *thickness *thickness);
         
         
           if(damage<10){
               wall.shapeColor=color(255,0,0);
               
           }
         
           if(damage>10){
         
             wall.shapeColor=color(0,255,0);
         
           }
         
         
         
         
         }
         return false;
}
         


        