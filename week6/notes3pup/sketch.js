var centerX = 0;
var centerY = 0;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(color('#20B2AA '));
  
 
    
    
  strokeWeight(1);
  
    fill("red")

   quad(centerX - 100, 400, centerX + 100, 400, centerX + 40, 230, centerX - 40, 230);
    
    fill("gray");
    ellipse(centerX - 60,centerY - 60,50,50);
     ellipse(centerX + 60,centerY  - 60,50,50);
      fill("gray");
      rect(centerX, centerY + 110, 105, 200,200);
    fill("yellow")
    rect(centerX, centerY + 90, 105, 130, 0);
    
    fill("gray");
    rect(centerX-30, centerY + 110, 25, 100,200);
     rect(centerX + 30, centerY + 110, 25, 100,200);
     
    fill("yellow")
    rect(centerX-30, centerY + 90, 25, 90,0);
     rect(centerX + 30, centerY + 90, 25, 90, 0);
    
    
   
   
    
  
  //face
  fill("gray") 
 ellipse(centerX, centerY, 150, 150);
  //nose
     
strokeWeight(2);
    fill("gray");
    arc(centerX - 30,centerY + 10,60, 60, TWO_PI, PI/2);
      arc(centerX + 30,centerY + 10,60, 60, PI/2, PI);
  
   
    strokeWeight(1);
    fill("pink")
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  fill("yellow");
    
   
    
    
  rectMode(CENTER);
 
   
  noFill();
  strokeWeight(4);
//  arc(centerX,centerY,100,100, 0,PI)
  rect(centerX-60, centerY-20, 25,1,1);
     rect(centerX + 60, centerY-20, 25,1,1);
////    arc(centerX - 50,centerY - 70,80, 30, TWO_PI/3, TWO_PI);
//     arc(centerX - 40,centerY - 80,60, 60, TWO_PI/3, TWO_PI);

    
  
    
    strokeWeight(20);
  
ellipse(centerX - 20, centerY - 20, 40, 40);
  ellipse(centerX + 20, centerY - 20, 40, 40);

}