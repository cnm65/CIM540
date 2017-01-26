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

function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(255, 204, 0);
    console.log("width:" + width + " "+ "height:" + height); 
    
}

function draw(){
    ellipse(70,70,100,100);
    
    ellipse(width/2,height/2, 50, 50 );
    rect(mouthX, mouthY, mouthW, mouthH);
    line(mouthX,mouthY + mouthH/2,  mouthX + mouthW, mouthY + mouthH/2);
    
    
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