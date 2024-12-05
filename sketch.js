function setup() {
  createCanvas(800, 700);
  noLoop();
}

function draw() {
  background(220);
  const CELLSIZE = 20;
  noStroke();
  for(let x = 0; x < width; x += CELLSIZE){
    fill(random(255))
    rect(x, 0, CELLSIZE)
  }
}
