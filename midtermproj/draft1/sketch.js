var backgroundImg;
var clouds;
var rays;
var treehouse;

var leaf;
var title;
var play;
var music;
var logo;

var cloudX = 0;
var cloudY = 0;

var cloudPrevTime = 0;
var cloudInterval = .05;

var cloudStart = false;
var randNum = 0;
var mapX = 0;
var counter = 0;
var ballDir = true;

var musicArray = [];
var musicFrames = 4;
var pMillis = 0;
var musiccurrentFrame = 0;
var raysArray = [];
var raysFrames = 2;

var raycurrentFrame = 0;

var raypMillis = 0;


var interval = 350;

var appear = false;
var mySong = document.getElementById("Treehouse");
var boombox;


//var playX = 25;
//var playY = 25;
//var playButtonSize = 50;
//var playDist = 0;

function preload() {
    for (var frames = 0; frames < musicFrames; frames++) {
        var frameString = "assets/musicnotes" + frames + ".png";
        musicArray[frames] = loadImage(frameString);
    }
    
    for (var frames = 0; frames < raysFrames; frames++) {
        var frameString = "assets/rays" + frames + ".png";
        raysArray[frames] = loadImage(frameString);
    }
    
    backgroundImg = loadImage("assets/sky.png");

    rays = loadImage("assets/rays.png");
    clouds = loadImage("assets/clouds.png");


    treehouse = loadImage("assets/treehouse.png");

    leaf = loadImage("assets/leaf_small.png");
    title = loadImage("assets/title.png");
    boombox = loadImage("assets/boombox.png");
logo = loadImage("assets/logo.png");


}

function setup() {
    createCanvas(500, 500);
    cloudX = -width;
    console.log("width: " + width + " " + "height: " + height);

    noStroke();
    randNum = random(256); //0-255
    console.log(randNum);
    
    noCursor();


}

function draw() {
    frameRate(30);
    //console.log(frameRate());
  


   

   
    image(backgroundImg, 0, 0, 500, 500);

    image(clouds, cloudX, cloudY, 500, 500);
    image(raysArray[raycurrentFrame], 0, 0, 500, 500);
    image(treehouse, 0, 0, 500, 500);

    image(musicArray[0], 0, 0, 500, 500);
    
     //image(musicArray[2], 0, 0, 500, 500);




    image(musicArray[musiccurrentFrame], 0, 0, 500, 500);
    
    image(boombox, 0, 0, 500, 500);

    
if (cloudStart == true) {
    
    
      if (counter < 0) {
        //limit one
        ballDir = true;
        console.log("left hit: " + counter);

    }

    if (counter >= height / 60) {
        //limit two
        ballDir = false;
        console.log("right hit: " + counter);

    }

    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter - 1;
    }
    
    
    if (millis() - pMillis >= interval) {
        musiccurrentFrame++; // Next frame
        pMillis = millis();
        appear = true;
    }
    if (musiccurrentFrame == musicArray.length) {
        musiccurrentFrame = 0;
        // Return to first frame
    }

    
    if (millis() - raypMillis >= interval) {
        raycurrentFrame++; // Next frame
        raypMillis = millis();
        appear = true;
    }
    if (raycurrentFrame == raysArray.length) {
        raycurrentFrame = 0;
        // Return to first frame
    }



    
//        if (millis() - cloudPrevTime > cloudInterval) {
//            cloudPrevTime = millis();
//            cloudX= cloudX + 5;
//
//            if (cloudX > width) {
//                cloudX = -width;
//            }
//        }
    
     cloudX= cloudX + 1;

            if (cloudX > width) {
                cloudX = -width;
            }
    }



   // frameRate(20);
    image(title, 0, counter, 500, 500);


//rect(playX, playY, playButtonSize, playButtonSize);
//playDist = dist(playX + (playButtonSize/2) ,playY + (playButtonSize/2), mouseX, mouseY);
//    console.log(playDist);
    
    image(logo, 0, 0, 500, 500);
     image(leaf, mouseX, mouseY, 50, 50);


}

function mousePressed() {
    randNum = random(256);
    if (cloudStart == false) {
        cloudStart = true;
    } else {
        cloudStart = false;
    }
    
    if (appear == false) {
        appear = true;
    } else {
        appear = false;
    }
    
//    if(playDist < playButtonSize/2){
//        Treehouse.play();
//    }

}



function playPause() {
    if (Treehouse.paused)
        Treehouse.play();
    else
        Treehouse.pause();
}