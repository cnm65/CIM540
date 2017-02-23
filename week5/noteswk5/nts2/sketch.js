var randomHello = [];


function setup() {
console.log(randomHello.length);
    console.log(typeof(randomHello));
    randomHello.push("buttox");
    console.log(randomHello);
    console.log(randomHello[0]);
    console.log(randomHello.length);
    
  
    randomHello.push("booty");
    console.log(randomHello);
    console.log(randomHello[1]);
    console.log(randomHello.length);
    
    
    randomHello.push("butt");
    console.log(randomHello);
   ;
    console.log(randomHello.length-1);
    console.log(randomHello.length);
    
   randomHello.push("tushy");
    randomHello.push("ass");
    randomHello.push("boom boom");
    randomHello.push("pumpkins");
    randomHello.push("bass");
    
    console.log(randomHello);
    console.log(randomHello[randomHello.length-1]);
    console.log(randomHello.length);
    
    console.log()
for(var i = 0; i < randomHello.length; i++){
    text(randomHello[i], random(width), random(height));
}
    console.log(randomHello.shift);
    console.log(randomHello);
    
    console.log(randomHello.pop);
    console.log(randomHello);
}

function draw() { for( var i = 0; i < randomHello.length; i++){
    text(randomHello[i], random(width), random(height));}
  
}