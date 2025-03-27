function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();

  desenhaJogadores();

  desenhaLinhaDeChegada();

  verificaVencedor();

  function ativaJogo() {
    if (focused == true) {
      background("#91D83F");
    } else {
      background("rgb(190,46,46)");
    }
  }

  function desenhaJogadores() {
    textSize(40);
    text("🐭", xJogador1, 70);
    text("🐨", xJogador2, 160);
    text("🐼", xJogador3, 250);
    text("🐺", xJogador4, 340);
  }

  function desenhaLinhaDeChegada() {
    rect(350, 0, 10, 400);
  }

  function verificaVencedor() {
    if (xJogador1 > 350) {
      text("Rato venceu!", 40, 200);
      noLoop();
    }
    
    if (xJogador2 > 350) {
      text("Coala venceu!", 50, 200);
      noLoop();
    }

    if (xJogador3 > 350) {
      text("Panda venceu!", 50, 200);
      noLoop();
    }
    
    if (xJogador4 > 350) {
      text("Lobo venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "b") {
    xJogador3 += random(20);
  }
  if (key == "l") {
    xJogador2 += random(20);
  }
  
  if (key == "d") {
    xJogador4 += random(20);
  }
}
