let bgImage;

// Dimensiones del canvas
const CANVAS_W = 630;   // 1/3 más ancho que 472
const CANVAS_H = 5086;  // igual que antes

function preload() {
  bgImage = loadImage('https://jdelafuentec.github.io/web/transectoSal.jpg');
}

function setup() {
  const canvas = createCanvas(CANVAS_W, CANVAS_H);
  canvas.parent("sketch-holder");
  textFont('Arial');
  textStyle(BOLD);
  textSize(12);
}

function draw() {
  background(255);
  // Escalo la imagen al nuevo ancho; altura igual
  image(bgImage, 0, 0, width, height);

  // ---- Zona 1 (antes x=125 en 472 => frac ~0.265; y=100 igual) ----
  const x1 = width * 0.265;  // equivale a ~125 cuando width=472
  const y1 = 100;
  const r1 = 60;

  if (dist(mouseX, mouseY, x1, y1) < r1) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x1, y1, r1 * 2);

    noStroke();
    fill(0);
    // Texto: antes en (80,80) sobre 472 => frac 80/472=0.169
    text("Costra de Sal", width * 0.169, 80);
  }

  // ---- Zona 2 (antes width/1.1, height/2.55; radio 60) ----
  const x2 = width / 1.1;     // ~0.909 * width
  const y2 = height / 2.55;   // mismo que antes
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
