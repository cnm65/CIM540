//looping example
var i = 0;

function setup() {
createCanvas(200,200);
    frameRate(60);
}

function draw() {
//  background(255);
    
   
//    i = i +1;
    
//    if(i > width){i = 0;}
//while loop
//    while(i < width){i ++; //i equals i plus 1
//        console.log(i);
//    }

//for loop runs once then stops
    for(var i = 0; i < width; i++){
        console.log(i);
        fill(random(255), random(255), random(255));
         ellipse(random(width), random(height), 10, 10);
    }
}