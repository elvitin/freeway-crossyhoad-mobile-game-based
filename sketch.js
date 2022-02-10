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

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const moveCars = () => {
  xCar1 += xCar1Speed;
  if (xCar1 < -car1Width) {
    xCar1 = _width;

    do {
      yCar1 = lanes[getRandomArbitrary(0, 2)];
    } while(yCar1 == yCar2);
  }

  xCar2 += xCar2Speed;
  if (xCar2 < -car2Width) {
    xCar2 = _width;

    do {
      yCar2 = lanes[getRandomArbitrary(0, 2)];
    } while(yCar1 == yCar2);
  }

  xCar3 += xCar3Speed;
  if (xCar3 > _width) {
    xCar3 = -car3Width;
    yCar3 = lanes[getRandomArbitrary(3, 6)];
  }
};

const drawPig = () => {
  image(pigSprite, xPigPos, yPigPos, pigWidth, pigHeight);
};



let flag = false;
let time = 20;
let discounter = 3;
function keyPressed() {
  if (keyCode === UP_ARROW) {
    flag = true;
    
    // yPigPos += -50;
  }
}

function pigMov()
{
  if (!flag)
    return;

  if(time)
  {
    if (time <= 10)
    {
      discounter = -2;
      console.log('qnts vezes');
    }

    pigHeight += discounter;
    pigWidth += discounter;
    yPigPos += -2;
    time--;
    
  }
  else {
    flag = false;
    time = 20;
    discounter = 2;
  }
}

const movePig = () => {

  if (keyIsDown(UP_ARROW))
    yPigPos += -yPigSpeed;

  if (keyIsDown(DOWN_ARROW))
    yPigPos += yPigSpeed;

  if (keyIsDown(LEFT_ARROW))
    xPigPos += -xPigSpeed;

  if (keyIsDown(RIGHT_ARROW))
    xPigPos += xPigSpeed;
}

function draw() {
  background(backdrop);
  drawPig();
  drawCars();
  // movePig();
  pigMov();
  moveCars();
};
