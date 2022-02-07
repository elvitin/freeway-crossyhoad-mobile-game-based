let _width = window.innerWidth - 100;
const _height = 400;

let backdrop;


function preload() {
  backdrop = loadImage("assets//sprites//estrada.png");
  pigSprite = loadImage("assets//sprites//ator-1.png");
  carSprite1 = loadImage("assets//sprites//carro-1.png");
  carSprite2 = loadImage("assets//sprites//carro-2.png");
  carSprite3 = loadImage("assets//sprites//carro-3_right.png");
}

function setup() {
  createCanvas(_width, _height);
}

function windowResized() {
  _width = window.innerWidth - 100;
  resizeCanvas(_width, _height);
}

const drawCars = () => {
  image(carSprite1, xCar1, yCar1, car1Width, car1Height);
  image(carSprite2, xCar2, yCar2, car2Width, car2Height);

  

  image(carSprite3, xCar3, yCar3, car3Width, car3Height);
};

const moveCars = () => {
  xCar1 += xCar1Speed;
  if (xCar1 < -car1Width) {
    xCar1 = _width;
  }

  xCar2 += xCar2Speed;
  if (xCar2 < -car2Width) {
    xCar2 = _width;
  }

  xCar3 += xCar3Speed;
  if (xCar3 > _width) {
    xCar3 = -car3Width;
  }
};


function draw() {
  background(backdrop);
  image(pigSprite, xPigPos, yPigPos, pigWidth, pigHeight);
  drawCars();
  moveCars();
}
