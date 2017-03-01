var img; 
function setup() {
createCanvas(400, 500);
    img = loadImage("assets/headshot.jpg");
}

function draw() {
 image(img, 0, 0);
    image(img, 0, height/2, img.width/2, img.height/2);
}