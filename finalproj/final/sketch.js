var playSound = false;
var stopSound = true;

var playSound2 = false;
var stopSound2 = true;

var drumsPlay = false;
var horns1Play = false;
var horns2Play = false;
var ohPlay = false;
var guitarPlay = false;
var voicePlay = false

var menuStartX = 90;
var menuStartY = 350;
var buttonOffset = 15;
var numberOfButtons = 2;

var buttonSize = 30;

var buttonArray = [];
var imageArray = [];

var drums;
var horns1;
var horns2;
var oh;
var guitar;
var audio1;
var audio2;



var drum;
var alto;
var bass;
var soprano;
var tenor;
var spotlight;
var title;
var voice; 
var voice2;
var voice3;


var prevMillis = 0;

function preload() {

    imageArray.push(loadImage('assets/drumplay.png'));
    imageArray.push(loadImage('assets/drumpause.png'));

    drums = loadSound('assets/drum_1.mp3');
    horns1 = loadSound('assets/horn1.mp3');
    horns2 = loadSound('assets/horn2.mp3');
    oh = loadSound('assets/ohwuhoh.mp3');
    guitar = loadSound('assets/guitar.mp3');
    audio1 = loadSound('assets/hoo.mp3');
     audio2 = loadSound('assets/hoo.mp3');


    voice = loadImage("assets/voice.png");
    voice2 = loadImage("assets/voice2.png");
    voice3 = loadImage("assets/voice3.png");
    drum = loadImage("assets/drum.png");
    alto = loadImage("assets/alto.png");
    bass = loadImage("assets/bass.png");
    soprano = loadImage("assets/soprano.png");
    tenor = loadImage("assets/tenor.png");
    spotlight = loadImage("assets/spotlight.png");
    title = loadImage("assets/title.png");
}

function setup() {

    createCanvas(800, 400);

    buttonArray.push(new buttonObject(menuStartX, menuStartY, buttonSize, imageArray[0], "play"));
    buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons), menuStartY, buttonSize, imageArray[1], "stop"));

    buttonArray.push(new buttonObject(menuStartX + 100, menuStartY, buttonSize, imageArray[0], "play"));
    buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons) + 100, menuStartY, buttonSize, imageArray[1], "stop"));
    
    buttonArray.push(new buttonObject(menuStartX + 200, menuStartY, buttonSize, imageArray[0], "play"));
    buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons) + 200, menuStartY, buttonSize, imageArray[1], "stop"));
    
        buttonArray.push(new buttonObject(menuStartX + 300, menuStartY, buttonSize, imageArray[0], "play"));
    buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons) + 300, menuStartY, buttonSize, imageArray[1], "stop"));
    
     buttonArray.push(new buttonObject(menuStartX + 400, menuStartY, buttonSize, imageArray[0], "play"));
    buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons) + 400, menuStartY, buttonSize, imageArray[1], "stop"));
 
    buttonArray.push(new buttonObject(menuStartX + 500, menuStartY, buttonSize, imageArray[0], "play"));
    buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons) + 500, menuStartY, buttonSize, imageArray[1], "stop"));
    
     buttonArray.push(new buttonObject(menuStartX + 600, menuStartY, buttonSize, imageArray[0], "play"));
    buttonArray.push(new buttonObject(menuStartX + (buttonOffset * numberOfButtons) + 600, menuStartY, buttonSize, imageArray[1], "stop"));

    //soundFile.loop();
    //horns1.loop();
    
    drums.stop();
    horns1.stop();
    horns2.stop();
    oh.stop();
  guitar.stop();
     audio1.stop();

}

function draw() {
    background("black");

    image(spotlight, 100, 220, 150, 340);
    image(spotlight, 200, 220, 150, 340);
    image(spotlight, 300, 220, 150, 340);
    image(spotlight, 400, 220, 150, 340);
    image(spotlight, 500, 220, 150, 340);
    image(spotlight, 600, 220, 150, 340);
     image(spotlight, 700, 220, 150, 340);
    
    
    image(drum, 100, 290, 130, 130);
    image(bass, 200, 270, 80, 120);
    image(soprano, 300,270, 80, 120);
    image(alto, 400, 270, 80, 120);
    image(tenor, 500, 270, 80, 120);
    
    image(voice, 500, 270, 80, 120);
    image(voice2, 600, 270, 80, 120);
    image(voice3, 700, 270, 80, 120);
    image(title, 400, 170, 900, 320);

    for (var buttons in buttonArray) {
        buttonArray[buttons].display(buttonArray[buttons].overButton(mouseX, mouseY));
    }


//    if (playSound == true) {
       //        drumPlay == true;
       //        //        playSound = false;
       //        //        stopSound = false;
       //        //        soundFile.setVolume(1);
       //        //        soundFile.play();
       //    }
       //
       //    if (stopSound == true) {
       //        drumPlay = false;
       //        //        playSound = false;
       //        //        stopSound = false;
       //        //        soundFile.stop();
       //
       //    }
       //
       //    if (playSound2 == true) {
       //        hornPlay = true;
       //        //        playSound2 = false;
       //        //        stopSound2 = false;
       //        //        horns1.setVolume(1);
       //        //        horns1.play();
       //    }
       //
       //    if (stopSound2 == true) {
       //        hornPlay = false;
       //        //        playSound2 = false;
       //        //        stopSound2 = false;
       //        //       horns1.stop();
       //
       //    }
       //

    //    if (millis > 10000){
    //    
    //    
    //   
    //    if(drumsPlay == true){
    //    drums.play();
    //    }
    //        if()
    //     }

    if (millis() - prevMillis > 4330) {
        prevMillis = millis();
        if (drumsPlay == true) {
            drums.play();
           // drumsPlay = false;
        }
        
        if(horns1Play == true){
            horns1.play();
          
        }
         
        if(horns2Play == true){
            horns2.play();
          
        }
        if(ohPlay == true){
            oh.play();
          
        }
         if(guitarPlay == true){
            guitar.play();
          
        }
        
        if(voicePlay == true){
            audio1.play();
          
        }
    }

}

function mousePressed() {
    for (var buttons in buttonArray) {
        if (buttonArray[buttons].overButton(mouseX, mouseY) == true) {

            if (buttons == 0) {
//                if (soundFile.isPlaying() == false) {
//                    soundFile.setVolume(1);
//                    soundFile.play();
//                }
                drumsPlay = true;

            } else if (buttons == 1) {
                //soundFile.stop();
                drumsPlay = false;
            } else if (buttons == 2) {
//                if (horns1.isPlaying() == false) {
//                    horns1.setVolume(1);
//                    horns1.play();
                horns1Play = true;
                } else if (buttons == 3) {
//                    horns1.stop();
                    horns1Play = false;
                }
             else if (buttons == 4) {
//                if (horns1.isPlaying() == false) {
//                    horns1.setVolume(1);
//                    horns1.play();
                horns2Play = true;
                } else if (buttons == 5) {
//                    horns1.stop();
                    horns2Play = false;
                }
             else if (buttons == 6) {
//                if (horns1.isPlaying() == false) {
//                    horns1.setVolume(1);
//                    horns1.play();
                ohPlay = true;
                } else if (buttons == 7) {
//                    horns1.stop();
                    ohPlay = false;
                }
             else if (buttons == 8) {
//                if (horns1.isPlaying() == false) {
//                    horns1.setVolume(1);
//                    horns1.play();
                guitarPlay = true;
                } else if (buttons == 9) {
//                    horns1.stop();
                    guitarPlay = false;
                }
            
              else if (buttons == 10) {
//                if (horns1.isPlaying() == false) {
//                    horns1.setVolume(1);
//                    horns1.play();
                voicePlay = true;
                } else if (buttons == 11) {
//                    horns1.stop();
                    voicePlay = false;
                }
                //  
                //do this with everonejust copy what is up there with an else if
            }
        }
    }




function buttonObject(tempX, tempY, tempBsize, tempImg, tempBtype) {
    this.x = tempX;
    this.y = tempY;
    this.bSize = tempBsize;
    this.buttonImage = tempImg;
    this.buttonType = tempBtype;

    this.display = function (mousedOver) {

        imageMode(CENTER);
        image(this.buttonImage, this.x, this.y, this.bSize, this.bSize);

        if (mousedOver == true) {
            rectMode(CENTER);
            fill(255, 125);
            rect(this.x, this.y, this.bSize, this.bSize);
        }

    }

    this.overButton = function (curMouseX, curMouseY) {
        var oB = dist(curMouseX, curMouseY, this.x, this.y);
        if (oB < this.bSize / 2) {
            console.log(this.buttonType + " over")
            return true;
        } else {
            return false;
        }
    }
}