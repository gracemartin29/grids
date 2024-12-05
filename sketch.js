const CELLSIZES = [50, 100, 150];
const COLOURS = ["#C71585", "#483D8B", "#B0E0E6", "#8B0000", "#E6E6FA"]

function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(0);
  // noStroke();
  // basic grid
  /*const CELLSIZE = 20;
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      fill(random(255))
      rect(x, y, CELLSIZE)
    }
  }*/

  // piet mondrian inspired grid
  /*let x = 0;
  let y = 0;
  let currentWidth = random(CELLSIZES);
  let currentHeight = random(CELLSIZES);
  strokeWeight(3);
  while (y < height) {
    let cellsize = random(CELLSIZES);
    while (x < width) {
      fill(random(COLOURS));
      rect(x, y, currentHeight, currentHeight);
      x += currentWidth;
      currentWidth = random(CELLSIZES);
    }
    x = 0;
    y += currentHeight;
    currentHeight = random(CELLSIZES); 
  }*/

  // grid of shapes
  const ARCVALUES = [PI/2, PI, PI + PI/2, 2*PI]
  const CELLSIZE = 50;
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      fill(random(COLOURS))
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES))
      fill(random(COLOURS))
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE/2, CELLSIZE/2, 0, random(ARCVALUES))

    }
  }
}
