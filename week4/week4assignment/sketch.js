var counter = 0;
var ballDir = true;

function setup() {
    createCanvas(600, 500);
}

function draw() {
    background(255);
  
    if (counter < 0) {
        //limit one
        ballDir = true;
        console.log("left hit: " + counter);

    }

    if (counter >= height/2) {
        //limit two
        ballDir = false;
        console.log("right hit: " + counter);

    }

    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter ;
    }




    //console.log(counter);

    //    if(counter > width){
    //       counter = 0;
    //    }

    ellipse(height/2, counter, 25, 25);
}