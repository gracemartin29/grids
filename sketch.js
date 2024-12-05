function setup() {
  createCanvas(800, 700);
  noLoop();
}

function draw() {
  background(220);
  const CELLSIZE = 20;
  noStroke();
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      fill(random(255))
      rect(x, y, CELLSIZE)
    }
  }

}
