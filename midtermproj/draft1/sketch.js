var backgroundImg;
var clouds;
var rays;
var treehouse;

var leaf; 
var title;

var cloudX = 0;
var cloudY = 0;

var cloudPrevTime = 0;
var cloudInterval = 10;

var cloudStart = false;
var randNum = 0;
var mapX = 0;
var counter = 0;
var ballDir = true;


function preload() {
    backgroundImg = loadImage("assets/sky.png");
    
    rays = loadImage("assets/rays.png");
    clouds = loadImage("assets/clouds.png");
    
     
    treehouse = loadImage("assets/treehouse.png");

    leaf = loadImage("assets/leaf.png");
  title = loadImage("assets/title.png");
}

function setup() {
    createCanvas(500, 500);
    cloudX = -width;
 console.log("width: " + width + " " + "height: "+ height);

    noStroke();
    randNum = random(256); //0-255
    console.log(randNum);


}

function draw() {
    frameRate(60);
    if (counter < 0) {
        //limit one
        ballDir = true;
        console.log("left hit: " + counter);

    }

    if (counter >= height/60) {
        //limit two
        ballDir = false;
        console.log("right hit: " + counter);

    }

    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter - 1  ;
    }

       
     mapX = map(mouseX,0,width,-10,10);
   
    image(leaf,mouseX, mouseY,10,10);
    
    image(backgroundImg, 0, 0, 500, 500);
    
    image(clouds, cloudX, cloudY, 500, 500);
    image(rays, 0, 0, 500, 500);
    image(treehouse, 0, 0, 500, 500);
    
   
    
    
    
    

    if (cloudStart == true) {
        if (millis() - cloudPrevTime > cloudInterval) {
            cloudPrevTime = millis();
            cloudX++;

            if (cloudX > width) {
                cloudX = -width;
            }
        }
    }
    
  
    
     frameRate(20);
    image(title, 0, counter, 500, 500);
  

 
    
}

function mousePressed() {
    randNum = random(256);
    if(cloudStart == false){
    cloudStart = true;
    }else{
        cloudStart = false;
    }
  
}