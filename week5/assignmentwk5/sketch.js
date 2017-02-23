var questions = "What is your favorite potato dish?";

var choices = {
  "Fries": 0,
  "Sweet Potatoes": 0,
  "Potato chips": 0,
  "Mashed Potatoes": 0
};

var currentAnswer = 0;

var textArea = 100;

var totalCounter = 0;

function setup() {
  createCanvas(400, 400);
  background("red");
  noStroke();

}

function draw() {
  background("red");
  fill("yellow");
  textAlign(CENTER);
  text(questions, 0, 100, width, 100);
  var choiceCounter = 0;
  totalCounter = 0;

  for (var keys in choices) {

    fill("yellow");
    textAlign(CENTER);
    text(keys, choiceCounter * textArea, height / 2, textArea, textArea);
    text(choiceCounter + 1, choiceCounter * textArea, height / 2 + 20, textArea, textArea);
    text(choices[keys], choiceCounter * textArea, height / 2 + 40, textArea, textArea);

    choiceCounter++;

    totalCounter += choices[keys];

  }

  choiceCounter = 0;
  for (var keys in choices) {
    var rectHeight = map(choices[keys], 0, totalCounter, 0, height);
    fill("150, 150");
    rect((choiceCounter * 100) + 20, height - rectHeight, 50, height);
    choiceCounter++;
  }

  fill(0);
  var totalMessage = "total: " + totalCounter;
  text(totalMessage, 20, height - 10);

}

function keyPressed() {
  //console.log(keyCode);

  //49 == 1, 50 == 2, 51 == 3, 52 == 4
  if (keyCode == 49) {
    choices["Fries"]++;
  } else if (keyCode == 50) {
    choices["Sweet Potatoes"]++;
  } else if (keyCode == 51) {
    choices["Potato chips"]++;
  } else if (keyCode == 52) {
    choices["Mashed Potatoes"]++;
  }




}