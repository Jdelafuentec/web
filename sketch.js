let bgImage;

function preload() {
  bgImage = loadImage('https://jdelafuentec.github.io/web/transectoSal_med.jpg'); // versión optimizada
}

function setup() {
  const canvas = createCanvas(472, 5086); // tamaño reducido
  canvas.parent("sketch-holder");
  textFont('Arial');
  textStyle(BOLD);
  textSize(12);
}

function draw() {
  background(255);
  image(bgImage, 0, 0, width, height); // se adapta al canvas

  // Zona 1 (escalada desde el tamaño original)
  const x1 = 472 * (250 / 945);      // escala proporcional de 250px original
  const y1 = 100 * (5086 / 10173);   // escala proporcional de 100px original
  const r1 = 30;

  if (dist(mouseX, mouseY, x1, y1) < r1) {
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(x1, y1, r1 * 2);

    noStroke();
    fill(0);
    text("Costra de Sal", x1 - 50, y1 - 25);
  }

  // Zona 2 (escalada desde original)
  const x2 = 472 * (860 / 945);
  const y2 = 5086 / 2.55;
  const r2 = 30;

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
