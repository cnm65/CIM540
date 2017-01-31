var mouthX = 200;
var mouthY =350;
var mouthW = 450;
var mouthH= 60;
var x1 = 0;
var y1 = 100; 
var x2 = 500;
var y2 = 100; 
var x3 = 250;
var y3 = 50;




function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background('rgba(0,255,0, 0.25)');
    console.log("width:" + width + " "+ "height:" + height);     

    
}

function draw(){
    fill('#222222')
rect(200, 120, 100, 300);
    
    
    
      
    fill(255, 204, 0)
     ellipse(250,110, 150, 150 );
  fill(255,255,255)
    ellipse(210,90, 50, 50 );
     ellipse(290,90, 50, 50 );
     
    
     fill('#222222')
      ellipse(215,90, 10, 10 );
      ellipse(295,90, 10, 10 );
      
  
      
 rect(220, 130, 25, 10);
    rect(250, 130, 25, 10);
    
 
    ellipse(250,160, 50, 20 );
  triangle(250, 100, 258, 120, 242, 120);
      
     fill('#900574')
       triangle(210, 180, 250, 200, 212, 210);
    triangle(290, 180, 250, 200, 292, 210);
      rect(243, 190, 15, 15);
       
    fill('#059009')
    

 
//   triangle(100, 200, 180, 90, 240, 30);
//       triangle(400, 50, 325, 90, 240, 30);
//
//
//triangle(100, 300, 180, 50, 240, 30);
//       triangle(400, 50, 325, 90, 240, 30);

     
    ellipse(296, 40, 40,40);
     ellipse(320, 60, 40,40);
     ellipse(330, 90, 30,30);
    
    ellipse(256, 30, 40,40);
        ellipse(220, 40, 40,40);
    ellipse(190, 50, 40,40);
   
    ellipse(175, 80, 30,30);
    
     fill('#222222')
    rect(0, 0, 30, 500); 
    rect(470, 0, 30, 500); 
    quad(200, 221, 120, 160, 69, 160, 200, 270);
      
    quad(300, 290, 400, 160, 360, 160, 298, 230);
    
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