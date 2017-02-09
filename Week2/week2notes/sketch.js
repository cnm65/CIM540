//var num = 100;
//var num2 = 50;
//var trex = 1000;
//var message = "hey";
//var anothermessage= "byeeeeeee";
//var booleanVar = true;
//var booleanVar2 = false;
//
//function setup() 
//
//{
//    console.log(num);
//    console.log("num + num2= " + (num + num2));
//    console.log(num * num2);
//    console.log(num / num2);
//     console.log(message + anothermessage);
//    console.log(message + " " + anothermessage);
//    console.log(booleanVar); 
//    console.log(message + trex); 
//   //this will not work
//    console.log(message * trex);
//    /*
//    if you want to write 
//    more stuff, use a 
//    multi-line comment
//    */
//    
//}
//
//function draw() { console.log(num);
//                 
//                
//}

var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH= 60;
var eye1X = 70;
var eye1Y = 70;
var eye2offset = 300;
var pupilOffset= 20;
var width = 500;
var height = 400;
var backgroundColor = 'pink';
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
 
    //eye1
    background(backgroundColor);
    
    mapX = map(mouseX, 0, width, -10, 10);
 //ellipse(random(width), random(height), 50, 50);
    fill(255)
    ellipse(eye1X,eye1Y,100,100);
    fill(0, 0, 255) 
    
    ellipse(eye1X + mapX, eye1Y + pupilOffset,50,50);
  
    //eye2
     fill(255) 
    ellipse(eye1X + eye2offset, eye1Y,100,100);
     fill(0, 0, 255) 
   
     ellipse(eye1X + eye2offset + mapX,eye1Y + pupilOffset,50,50);

    //nose
    triangle(width/2, height/2, (width/2) + 20 , (height/2) + 20, (width/2) -  20 , (height/2) + 20)
    
    //mouth
    //fill(0,0,0);
     randNum = random(255); //0-255
   fill(randNum,0,0);
    arc(width/2, 280, 100, 150, 0, PI);
    stroke(125);
    strokeWeight(10);
    
   
//    rect(mouthX, mouthY, mouthW, mouthH);
//    line(mouthX,mouthY + mouthH/2,  mouthX + mouthW, mouthY + mouthH/2);
     noStroke();
   
    ellipse(mouseX, mouseY,10,10)
    
    
    
    //x, y, width, height
//    ellipse(170,170,150,150);
//   
//     ellipse(400,170,200,200);
//
//     ellipse(width/2,height/2, 50, 50 );
//    rect(100,10,150,50); 
//    rect(350,10,150,50); 
//    rect(150,450,400,40);
//   //start x at 50 and end at 320
//    line(50, 300, 450, 320);
}

  
    
    function mousePressed(){
      backgroundColor = "red"
    }

function mouseReleased(){
    backgroundColor = "green"
}
