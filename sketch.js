var n=6;
var diff;
var r = 200;
var bcolor,gcolor;

function setup() {
  createCanvas(600, 400);
  background(200, 20, 30);
  console.log("hi");
}

function draw() {
   bullseye(n);
}

function bullseye(n) {
  diff = r / n;
  fill(255,153,9);
  ellipse(300, 200, r);
  for (var i = 0; i < n; i++) {
    console.log(i);
    var bcolor = i * 10;
    var gcolor = i * 10;
    console.log(bcolor);
    fill(255,bcolor,gcolor);
    stroke(25);
    r = r - diff;
    ellipse(300, 200, r);
    
    //console.log("hi");
   
  }
  strokeWeight(10);
  point(300, 200);
}