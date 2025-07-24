let bgImage;
let foundCostra = false;
let foundMoco = false;

function preload() {
  bgImage = loadImage('https://jdelafuentec.github.io/web/transectoSal.jpg'); // imagen confirmada
}

function setup() {
  const canvas = createCanvas(472, 5086); // altura reducida proporcional
  canvas.parent("sketch-holder");
  textFont('Arial');
  textStyle(BOLD);
  textSize(12);
}

function draw() {
  background(255);
  image(bgImage, 0, 0, width, height); // adapta imagen al canvas

  // Zona 1
  const x1 = 472 * (250 / 945);
  const y1 = 100 * (5086 / 10173);
  const r1 = 30;

  if (dist(mouseX, mouseY, x1, y1) < r1) {
    if (!foundCostra) {
      foundCostra = true;
      document.getElementById('check-costra').innerText = "✅ Costra de Sal";
    }
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x1, y1, r1 * 2);
    noStroke();
    fill(0);
    text("Costra de Sal", x1 - 50, y1 - 25);
  }

  // Zona 2
  const x2 = 472 * (860 / 945);
  const y2 = 5086 / 2.55;
  const r2 = 30;

  if (dist(mouseX, mouseY, x2, y2) < r2) {
    if (!foundMoco) {
      foundMoco = true;
      document.getElementById('check-moco').innerText = "✅ El Moco";
    }
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x2, y2, r2 * 2);
    noStroke();
    fill(0);
    text("El Moco", x2 - 30, y2 - 15);
  }
}
