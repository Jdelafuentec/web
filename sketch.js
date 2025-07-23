let bgImage;

function preload() {
  bgImage = loadImage('https://jdelafuentec.github.io/web/transectoSal.jpg');
}

function setup() {
  let canvas = createCanvas(472, 5086);
  canvas.parent("sketch-holder");
  textFont('Arial');
  textStyle(BOLD);
  textSize(12);
}

function draw() {
  background(255);
  image(bgImage, 0, 0, width, height);

  // Zona 1
  let x1 = 125;
  let y1 = 100;
  if (dist(mouseX, mouseY, x1, y1) < 60) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x1, y1, 120);

    noStroke();
    fill(0);
    text("Costra de Sal", 80, 80);
  }

  // Zona 2
  let x2 = width / 1.1;
  let y2 = height / 2.55;
  if (dist(mouseX, mouseY, x2, y2) < 60) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x2, y2, 120);

    noStroke();
    fill(0);
    text("El Moco", x2 - 30, y2 - 15);
  }
}
