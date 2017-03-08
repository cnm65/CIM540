

var backgroundColor = 'yellow';

var randNum = 0;

var mapX = 0;


function setup() {
    createCanvas(500,400);
    background(0,0,0);
    

    console.log("width: " + width + " " + "height: "+ height);

    noStroke();
    randNum = random(256); //0-255
    console.log(randNum);



}

function draw() {
frameRate(60);
    background(backgroundColor);
    //background(randNum, 100,100);
    mapX = map(mouseX,0,width,-10,10);


    //mouse cursor
    ellipse(mouseX,mouseY,10,10);

}


function mousePressed(){
    //background('yellow');
    backgroundColor = 'pink';
    backgroundColor = "rgb(123,54,65)";
    //backgroundColor = "145,0,255";
    randNum = random(256); //0-255
}

function mouseReleased(){
    backgroundColor = 'blue';
}

