var choices = {
    "Cake": 0,
    "Candy": 0,
    "Pie": 0,
    "Savory": 0,

   
};

 var cakeMessage = "Cake:";
    var candyMessage = "Candy:";
    var pieMessage = "Pie:";
    var savoryMessage = "Savory:";



function setup() {
    createCanvas(400, 100);
    console.log(choices);
    //to access a particular choice
    console.log(choices["Cake"]);
    console.log(choices["Candy"]);
    console.log(choices["Pie"]);
    console.log(choices["Savory"]);
    
    noStroke();
}

function draw() {
    background(255);

    fill(255, 0, 0);

    ellipse(10, height / 2, choices["Cake"], choices["Cake"]);
    fill(0, 255, 0);

    ellipse(90, height / 2, choices["Cake"], choices["Cake"]);
    fill(0, 0, 255);
    ellipse(160, height / 2, choices["Cake"], choices["Cake"]);
    fill(0, 0, 0);
    ellipse(240, height / 2, choices["Cake"], choices["Cake"]);

    text(cakeMessage, 10, height / 2);
    text(candyMessage, 90, height / 2);
    text(pieMessage, 170, height / 2);
    text(savoryMessage, 250, height / 2);

}

function keyPressed() {
    //    49 == 1, 50 == 2, 51 == 3, 52 == 4
    if (keyCode == 49) {
        choices["Cake"]++;
        cakeMessage = "Cake:" + choices["Cake"];
    } else if (keyCode == 50) {
        choices["Candy"]++;
        candyMessage = "Candy:" + choices["Candy"];
    } else if (keyCode == 50) {
        choices["Pie"]++;
        pieMessage = "Pie:" + choices["Pie"];
    } else if (keyCode == 50) {
        choices["Savory"]++;
        savoryMessage = "Savory:" + choices["Savory"];
    }
    console.log(choices);
}