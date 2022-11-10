let walker;

function setup() {
  createCanvas(800,800);
  walker = new Walker(400,400);
  background(0);
}

function draw() {
  walker.update();
  walker.show();
  }