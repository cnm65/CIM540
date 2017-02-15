var counter = 0;
var ballDir = false;

var bgColor = "white";

function setup() {
    createCanvas(600, 600);
     
}

function draw() {
   background(bgColor);
    //you can make it fast by increasing plus one
    //    counter = counter + 1;

    //    counter = counter - 1;

    //    if(counter < width){counter = counter + 1}

    if (counter < 0) { //limit one
        ballDir = true;
        console.log("left hit" + counter)
    }
    if (counter >= height) { //limit two
        ballDir = false;
        console.log("right hit" + counter)
    }
    //    if(ballDir == true){counter= counter + 1
    //        
    //    }
    //    
    //        if(ballDir == false){counter= counter - 1
    //        
    //    }
    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter - 1;
    }

    //for ball to change color
    if (counter >= 0 && counter <= 200) {
        fill("red");
    } else if (counter > 200 && counter <= 400) {
        fill("green");
    } else if (counter > 400 && counter <= width) {
        fill("pink");

    } else {
        fill("yellow");
    }
    //    console.log(counter





    //  step 1 but now connecting it to counter  ellipse(0, height/2, 25, 25);
    // fill('blue')
    //an if statement in parentheses is the stament that is being evaluated in curly braces is what it is going to do based on that
    //    if(counter > width){ counter = 0;
    //        
    //    }
    
    
     

   
    if(mouseY > height/2){
        bgColor = "orange";
    
    }else{
       bgColor = "blue";
    }

    if(mouseY < height/2){ballDir = false;}
    if(mouseY >= height/2){ballDir = true; }

    ellipse(width/2, counter, 25, 25);
}

