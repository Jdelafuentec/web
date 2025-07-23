let bgImage;

function preload() {
  bgImage = loadImage('https://jdelafuentec.github.io/web/transectoSal.jpg');
}

function setup() {
  const canvas = createCanvas(945, 10173); // tamaño original de la imagen
  canvas.parent("sketch-holder");
  textFont('Arial');
  textStyle(BOLD);
  textSize(12);
}

function draw() {
  background(255);
  image(bgImage, 0, 0); // sin escalado

  // Zona 1: Costra de Sal
  const x1 = 250;
  const y1 = 100;
  const r1 = 60;

  if (dist(mouseX, mouseY, x1, y1) < r1) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x1, y1, r1 * 2);

    noStroke();
    fill(0);
    text("Costra de Sal", x1 - 50, y1 - 25);
  }

  // Zona 2: El Moco
  const x2 = 860; // aprox. 945 / 1.1
  const y2 = 10173 / 2.55;
  const r2 = 60;

  if (dist(mouseX, mouseY, x2, y2) < r2) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x2, y2, r2 * 2);

    noStroke();
    fill(0);
    text("El Moco", x2 - 30, y2 - 15);
  }
}
