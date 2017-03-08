var centerX = 0;
var centerY = 0;
var scaling = 3;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
    for(var i = 0; i< 100; i ++){
        
  
    stamp(random(width), random(height), random(0.0,2.0));  }
}

function draw() {
  

    //wrap character in push pop going to use a scale and a translate
}

function stamp(posX, posY, scales){
    push();
  fill(255)
  strokeWeight(1);
    
    translate(posX - (scaling * centerX), posY -(scaling * centerY));
    scale(scales);
    // 1=100% but its off center so we use translate so it's where we want
    //pattern between translate and scale if you look at translate scale = 2, more translate negatively to 200

  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  strokeWeight(4);
  arc(centerX,centerY,100,100, 0,PI)
  strokeWeight(30);
  arc(centerX,centerY,100,100, PI,TWO_PI)
pop();
    
    
}