var stars = []

var speed;

function setup() {
  var ht = document.getElementById('canvas').offsetHeight;
  var wt = document.getElementById('canvas').offsetWidth;
  var cnv=createCanvas(wt,ht);
  cnv.parent("canvas");
  for (var i = 0; i < 200; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = 2;
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {

    var colors=["#fff","#1D2671","#C33764"]
    var col=colors[Math.floor(Math.random()*colors.length)]
    fill(col);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

  }
}
