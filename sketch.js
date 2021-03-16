let angleWag;

let mic;
let micLevel;

let angleHeart = 20;
let fishy = false;
let Lwink = false;

let sunX = 0;
let fr = 30;
let clr;

var bubbles = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  mic = new p5.AudioIn()
  mic.start();
  
  frameRate(fr);
  clr = color(255, 232, 124)
  
  for (var i = 0; i < 4; i++) {
    bubbles[i] = new Bubble(); 
  }
  
}

function draw() { 
  
  background(196, 229, 236);
  
  micLevel = mic.getLevel();
  
  angleWag = map(mic.getLevel(), 0, .2, 360, 350);
  
  angleWag2 = map(mic.getLevel(), 0, .2, 0, -40);

  console.log("mic level" + mic.getLevel());
  
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }

  drawHeart(0,0,angleHeart);

  drawLear(0,0,angleWag);

  drawRear(0,0,angleWag);

  drawHead();

  drawLeye();

  drawLH1();

  drawLH2();

  drawReye();

  drawRH1();

  drawRH2();

  drawNose();

  drawMouth();

  drawLwhisker1();

  drawLwhisker2();

  drawLwhisker3();

  drawRwhisker1();

  drawRwhisker2();

  drawRwhisker3();
  
  if (fishy == true){
    drawFishy();
    
  } 
  
  if (Lwink == true){
    drawLWink();
  }
  
  sunX = sunX + 1 * (deltaTime / 50);
  
  if (sunX >= width) {
    if (fr === 30) {
      clr = color(255, 232, 124);
      fr = 30;
      frameRate(fr);
    }
    sunX = 0;
  }
  fill(clr);
  stroke(255, 232, 124)
  circle(sunX, 50, 50, 50);
}

function Bubble(){
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.display = function() {
    stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);
  }
  
  this.move = function() {
    this.x = this.x += 1 ;
    this.y = this.y + random(-1, 1);
      
  if(this.x >= width){
    this.x = 0;
    }
  }
}
  
function drawSun(){
  strokeWeight(1);
  circle(sunX, 40, 20, 20)}

function drawLWink(){
  fill(128, 128, 128);
  strokeWeight(2);
  quad(width * .3, height * .5, width * .3, height * .6, width * .4, height * .6, width * .4, height * .5);
  strokeWeight(2.5);
  line(width*.3, height*.55,width*.4,height*.55)
}

function mouseClicked(){
  bubbles.push(new Bubble());
}

function keyPressed(){
  bubbles.splice(Bubble.length-1,1);
}

function drawFishy(){
  fill(255,165,0);
    strokeWeight(2);
  //tail
    triangle(width*.25,height*.7, width*.25,height*.95,width*.4,height*.825)
  //fish body
    ellipse(width/2, height/1.2, 170, 70);
  //fin
    triangle(width*.45, height*.825, width*.55, height*.875, width*.575, height*.85)
  //eye
    fill(0);
    circle(width/1.6, height/1.22, 15);
    //highlight
    fill(255);
    circle(width/1.62, height/1.23, 7);
    fill(255);
    circle(width/1.58, height/1.21, 6);
  
}

function mousePressed(){
  
  if (mouseX > width*.3 && mouseX < width*.7 && mouseY > height*.3 && mouseY < height*.5){
    console.log("mouse beep in here");
    angleHeart = 0;
    
  } else if (mouseX > width *.45 && mouseX < width*.55 && mouseY > height*.675 && mouseY < height*.8 ){
  fishy = !fishy;} 
  
  if (mouseX > width * .3 && mouseX < width*.4 && mouseY > height * .5 && mouseY < height * .6){
    Lwink = !Lwink;}
}

function drawHeart(xPos, yPos, rotation) {

  //Heart
  
  push();
  translate(xPos, yPos);
  rotate(rotation);
  fill(250, 150, 194)
  strokeWeight(2)
  stroke(50)
  beginShape();
  vertex(width * .5, height * .25);
  vertex(width * .45, height * .2);
  vertex(width * .45, height * .15);
  vertex(width * .5, height * .18);
  vertex(width * .55, height * .15);
  vertex(width * .55, height * .2);
  endShape(CLOSE);
  pop();

}

function drawLear(xPos, yPos, rotation) {

  //L ear
  push();
  translate(xPos, yPos);
  //rotate(rotation)
  fill(128, 128, 128)
  strokeWeight(2)
  stroke(50)
  triangle((width * .2)-angleWag2, height * .1, width * .2, height * .5, width * .4, height * .3);
  pop();

}

function drawRear(xPos, yPos, rotation) {
  //R ear
  push();
  translate(xPos,yPos);
  //rotate(rotation);
  fill(128, 128, 128)
  strokeWeight(2)
  stroke(50)
  triangle((width * .8)+angleWag2, height * .1, width * .6, height * .3, width * .8, height * .5);
  pop();

}

function drawHead() {

  //Head
  fill(128, 128, 128)
  strokeWeight(2)
  stroke(50)
  beginShape();
  vertex(width * .3, height * .3);
  vertex(width * .2, height * .5);
  vertex(width * .2, height * .7);
  vertex(width * .4, height * .875);
  vertex(width * .6, height * .875);
  vertex(width * .8, height * .7);
  vertex(width * .8, height * .5);
  vertex(width * .7, height * .3);
  endShape(CLOSE);

}

function drawLeye() {

  //L eye
  fill(50)
  strokeWeight(2)
  stroke(50)
  quad(width * .3, height * .5, width * .3, height * .6, width * .4, height * .6, width * .4, height * .5);
}

function drawLH1() {

  //highlight1
  fill(255, 255)
  strokeWeight(2)
  stroke(50)
  beginShape();
  vertex(width * .3, height * .5);
  vertex(width * .3, height * .55);
  vertex(width * .35, height * .5);
  endShape(CLOSE);
}

function drawLH2() {

  //highlight2
  fill(255, 255)
  strokeWeight(2)
  stroke(50)
  beginShape();
  vertex(width * .35, height * .6);
  vertex(width * .4, height * .6);
  vertex(width * .4, height * .55);
  endShape(CLOSE);
}

function drawReye() {

  //R eye
  fill(25)
  strokeWeight(2)
  stroke(50)
  quad(width * .6, height * .5, width * .6, height * .6, width * .7, height * .6, width * .7, height * .5);
}

function drawRH1() { //highlight1
  fill(255, 255)
  strokeWeight(2)
  stroke(50)
  beginShape();
  vertex(width * .6, height * .5);
  vertex(width * .65, height * .5);
  vertex(width * .6, height * .55);
  endShape(CLOSE);
}

function drawRH2() {

  //highlight2
  fill(255, 255)
  strokeWeight(2)
  stroke(50)
  beginShape();
  vertex(width * .65, height * .6);
  vertex(width * .7, height * .6);
  vertex(width * .7, height * .55);
  endShape(CLOSE);
}

function drawNose() {

  //nose
  fill(100, 100, 100)
  strokeWeight(2)
  stroke(50)
  triangle(width * .45, height * .675, width * .55, height * .675, width * .5, height * .725);
}

function drawMouth() {

  //mouth
  strokeWeight(2)
  stroke(50)
  line(width * .5, height * .725, width * .5, height * .825);

}

function drawLwhisker1() {
  
  strokeWeight(2);
  fill(255,255,255);
  line(width * .1, height * .6, width * .2, height * .6);
}

function drawLwhisker2() {
  strokeWeight(2)
  line(width * .05, height * .65, width * .2, height * .65);
}

function drawLwhisker3() {
  strokeWeight(2)
  line(width * .0, height * .7, width * .2, height * .7);
}

function drawRwhisker1() {

  //Rwhisker1
  strokeWeight(2)
  line(width * .8, height * .6, width * .9, height * .6);
}

function drawRwhisker2() {

  strokeWeight(2)
  line(width * .8, height * .65, width * .95, height * .65);
}

function drawRwhisker3() {

  strokeWeight(2)
  line(width * .8, height * .7, width * 1.0, height * .7);
}