var message = "hello";
function setup() {

}

function draw() {
  background(255);
    textSize(32);
    text(message, 10, 10, 100,100);
}
//for messages
function mousePressed(){
    message = "goodbye";
    
}
function mouseReleased(){
    message = "";
}
//for typing A with developer tools
function keyPressed(){
    
    console.log(key);
    console.log(keyCode);
    
    if(key=='A'){console.log("A is for Apple")}
    
    if(keyCode == 65){console.log("A is for 65")}
}