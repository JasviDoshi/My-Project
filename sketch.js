var white1, white2, white3, white4, white5, white6, white7;
var black1, black2, black3, black4, black5;
var rand;
var notes = [];
var check = [];

function setup(){
  createCanvas(600, 400);
  white1 = createSprite(250, 200, 25, 80);
  white1.shapeColor = "white";
  white2 = createSprite(300, 200, 25, 80);
  white2.shapeColor="white";
  white3 = createSprite(350, 200, 25, 80);
  white3.shapeColor="white";
  white4 = createSprite(400, 200, 25, 80);
  white4.shapeColor="white";
  white5 = createSprite(450, 200, 25, 80);
  white5.shapeColor="white";
  white6 = createSprite(500, 200, 25, 80);
  white6.shapeColor="white";
  white7 = createSprite(550, 200, 25, 80);
  white7.shapeColor="white";

  black1 = createSprite(360, 275, 20, 50);
  black1.shapeColor="black";
  black2 = createSprite(302, 317, 20, 50);
  black2.shapeColor="black";
  black3 = createSprite();
  black3.shapeColor="black";
  black4 = createSprite();
  black4.shapeColor="black";
  black5 = createSprite();
  black5.shapeColor="black";
}

function draw(){
background("teal");

/*rand = random(1,12);
//switch will help play the random note
switch(rand) {
  case 1: //add sound of white1
  notes.push(1);
  white1.shapeColor("red");
  break;
  case 2: //add sound of white2
  notes.push(2);
  white2.shapeColor("red");
  break;
  case 3: //add sound of white3
  notes.push(3);
  white3.shapeColor("red");
  break;
  case 4: //add sound of white4
  notes.push(4);
  white4.shapeColor("red");
  break;
  case 5: //add sound of white5
  notes.push(5);
  white5.shapeColor("red");
  break;
  case 6: //add sound of white6
  notes.push(6);
  white6.shapeColor("red");
  break;
  case 7: //add sound of white7
  notes.push(7);
  white7.shapeColor("red");
  break;
  case 8: //add sound of black1
  notes.push(8);
  black1.shapeColor("red");
  break;
  case 9: //add sound of black2
  notes.push(9);
  black2.shapeColor("red");
  break;
  case 10: //add sound of black3
  notes.push(10);
  black3.shapeColor("red");
  break;
  case 11: //add sound of black4
  notes.push(11);
  black4.shapeColor("red");
  break;
  case 12: //add sound of black5
  notes.push(12);
  black5.shapeColor("red");
  break;
  default: break;
}*/

if(keyDown("SPACE")) {
notes = [];
}

if(mousePressedOver(white1)){
  check.push(1);
  console.log("You pressed on key 1")
}

if(mousePressedOver(white2)){
  check.push(2);
  console.log("You pressed on key 2")
}

if(mousePressedOver(white3)){
  check.push(3);
}

if(mousePressedOver(white4)){
  check.push(4);
}

if(mousePressedOver(white5)){
  check.push(5);
}

if(mousePressedOver(white6)){
  check.push(6);
}

if(mousePressedOver(white7)){
  check.push(7);
}

if(mousePressedOver(black1)){
  check.push(8);
}

if(mousePressedOver(black2)){
  check.push(9);
}

if(mousePressedOver(black3)){
  check.push(10);
}

if(mousePressedOver(black4)){
  check.push(11);
}

if(mousePressedOver(black5)){
  check.push(12);
}


if(notes.length === check.length){
  for(var i=0; i<notes.length; i++){
    if(notes[i]===check[i]){
text("Your notes are correct, well done!")
    }
    else{
      text("Your notes are not correct, please try again.")
    }
  }
}

console.log(check);

drawSprites();
}