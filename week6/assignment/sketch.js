var centerX = 0;
var centerY = 0;
var scaling = 3;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  
 background(color('#20B2AA '));
  
  for(var i = 0; i < 100; i++){
    multiDrawing(random(width/2),random(height/2), random(0.0,2.0));
  }
}

function draw() {
  
  
  
  
  

}

function multiDrawing(posX, posY, scales){
  push();
  fill("gray")
  strokeWeight(1);
  translate(posX - (centerX), posY - (centerY));
  scale(scales);
  //face
  
     fill("gray");  
strokeWeight(1);
     ellipse(centerX - 60,centerY - 60,50,50);
     ellipse(centerX + 60,centerY  - 60,50,50);
    ellipse(centerX, centerY, 150, 150);
  //nose
      
  
    strokeWeight(2);
    fill("gray");
    arc(centerX - 30,centerY + 10,60, 60, TWO_PI, PI/2);
      arc(centerX + 30,centerY + 10,60, 60, PI/2, PI);

    fill("pink");
    ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  strokeWeight(20);
    ellipse(centerX - 20, centerY - 20, 40, 40);
  ellipse(centerX + 20, centerY - 20, 40, 40);
strokeWeight(1);

    

  noFill();

  
 

  pop();
}