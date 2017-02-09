var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH= 60;
var eye1X = 220;
var eye1Y = 80;
var eye2offset = 60;
var pupilOffset= 0;
var width = 500;
var height = 400;
var backgroundColor = 'blue';
var randNum = 0;
var mapX = 0;



function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);
    
    console.log("width:" + width + " "+ "height:" + height); 
   
   console.log(randNum);
}

function draw(){
  background(backgroundColor);
    //body
    fill('#222222')
rect(210, 140, 80, 300);
    //head
    fill(255, 204, 0)
     ellipse(250,110, 150, 150 );
   //arms
    fill(0,0,0);
  triangle(190, 290, 210, 210, 210, 290)
  triangle(310, 290, 290, 210, 290, 290)
   //hands
  fill(255,204,0)
    arc(300, 290, 19, 20,0,PI);
     fill(255,204,0)
    arc(200, 290, 19, 20,0,PI);
    
    //eye1
   
    mapX = map(mouseX, 0, width, -9, 0);
 //ellipse(random(width), random(height), 50, 50);
    fill(255)
    ellipse(eye1X,eye1Y,40,40);
    fill('#222222') 
    
    ellipse(eye1X + mapX, eye1Y + pupilOffset,10,10);
  
    //eye2
     fill(255) 
    ellipse(eye1X + eye2offset, eye1Y,50,50);
      fill('#222222')
   
     ellipse(eye1X + eye2offset + mapX,eye1Y + pupilOffset,10,10);

    //nose
    fill('#6960EC')
    triangle(eye1X + (eye2offset/2), 90, (eye1X + (eye2offset/2) + 10) , 110, (eye1X +(eye2offset/2)) -  10 , 110)
//    triangle(290, 180, 250, 200, 292, 210);
//  
    
    //mouth
    fill(0,0,0);
   
    arc(eye1X + (eye2offset/2), 130, 50, 60, 0, PI);
    stroke(125);
    strokeWeight(10);
    

     noStroke();
    
   
    ellipse(mouseX, mouseY,10,10)
    
    //mustache
    fill('#900574')
    arc(eye1X + 15, eye1Y + 45 ,30, 20, PI, PI+PI)
    arc(eye1X + eye2offset -15, eye1Y + 45 ,30, 20, PI, PI+PI)
    
    
     randNum = random(255); //0-255
   fill(randNum,0,0);
       triangle(200, 170, 250, 200, 200, 220);
    triangle(300, 170, 250, 200, 300, 220);
      rect(243, 190, 15, 15);
    
   
    //hair
    fill('#059009')

     
    ellipse(296, 40, 40,40);
     ellipse(320, 60, 40,40);
     ellipse(330, 90, 30,30);
    
    ellipse(256, 30, 40,40);
        ellipse(220, 40, 40,40);
    ellipse(190, 50, 40,40);
   
    ellipse(175, 80, 30,30);
    
      
}

  
    
    function mousePressed(){
      backgroundColor = "red"
    }

function mouseReleased(){
    backgroundColor = "pink"
}
