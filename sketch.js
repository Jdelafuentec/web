let bgImage;
let foundCostra = false;
let foundMoco = false;

function preload() {
  // Imagen original grande confirmada
  bgImage = loadImage('https://jdelafuentec.github.io/web/transectoSal.jpg');
}

function setup() {
  const canvas = createCanvas(600, 6460); // imagen más grande
  canvas.parent("sketch-holder");
  textFont('Arial');
  textStyle(BOLD);
  textSize(14);
}

function draw() {
  background(255);
  image(bgImage, 0, 0, width, height);

  // --- Zona 1: Costra de Sal ---
  const x1 = 600 * (250 / 945);           // Escalado proporcional
  const y1 = 100 * (6460 / 10173);
  const r1 = 35;
  const hovered1 = dist(mouseX, mouseY, x1, y1) < r1;

  if (hovered1 && !foundCostra) {
    foundCostra = true;
    document.getElementById('check-costra').innerText = "✅ Costra de Sal";
  }

  if (foundCostra || hovered1) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x1, y1, r1 * 2);
    noStroke();
    fill(0);
    text("Costra de Sal", x1 - 60, y1 - 30);
  }

  // --- Zona 2: El Moco ---
  const x2 = 600 * (860 / 945);           // Escalado proporcional
  const y2 = 6460 / 2.55;
  const r2 = 35;
  const hovered2 = dist(mouseX, mouseY, x2, y2) < r2;

  if (hovered2 && !foundMoco) {
    foundMoco = true;
    document.getElementById('check-moco').innerText = "✅ El Moco";
  }

  if (foundMoco || hovered2) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x2, y2, r2 * 2);
    noStroke();
    fill(0);
    text("El Moco", x2 - 35, y2 - 20);
  }
}
