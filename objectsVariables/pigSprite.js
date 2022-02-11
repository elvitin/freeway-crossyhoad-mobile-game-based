let pigSprite;

let xPigPos = 100;
let yPigPos = 365;

let xPigSpeed = 0.5;
let yPigSpeed = 0.5;

let pigWidth = 30;
let pigHeight = 30;

//Salto variaveis
let flag = false;
let fullTime = 16;
let halfTime = fullTime / 2;
let time = halfTime;
let halfTimeFlag = true;
let discounter = 1;

let _yPigSpeed = 0;
let _xPigSpeed = 0;
let speed = 3;

//Souds
let frogSound;
let collideFrogSound;

function keyPressed() {
  flag = true;
  if (keyCode === UP_ARROW) {
    _yPigSpeed = -speed;
  }

  if (keyCode === DOWN_ARROW) {
    _yPigSpeed = speed;
  }

  if (keyCode === LEFT_ARROW) {
    _xPigSpeed = -speed;
  }

  if (keyCode === RIGHT_ARROW) {
    _xPigSpeed = speed;
  }
}

function frogJump() {
  if (flag) {
    if (time) {
      pigHeight += discounter;
      pigWidth += discounter;

      xPigPos += _xPigSpeed;
      yPigPos += _yPigSpeed;

      time--;
    } else {
      if (halfTimeFlag) {
        frogSound.play();
        time = halfTime;
        halfTimeFlag = false;
      } else {
        flag = false;
        time = halfTime;
        halfTimeFlag = true;
        _xPigSpeed = 0;
        _yPigSpeed = 0;
      }
      discounter = -discounter;
    }
  }
}

let testX;
let testY;
let distance;

function collideRectCircle(rx, ry, rw, rh, cx, cy, diameter) {

  testX = cx;
  testY = cy;

  if (cx < rx) {
    testX = rx;
  } else if (cx > rx + rw) {
    testX = rx + rw;
  }

  if (cy < ry) {
    testY = ry;
  } else if (cy > ry + rh) {
    testY = ry + rh;
  }

  distance = this.dist(cx, cy, testX, testY);

  return distance <= diameter / 2;
}

function collideAnimation()
{
  
}

function checkCollideFrog() {

  if (collideRectCircle(xCar3, yCar3, car3Width, car3Height, xPigPos, yPigPos, 28))
  {
    console.log('Collid');
    collideAnimation();
  }
}




const movePig = () => {
  if (keyIsDown(UP_ARROW)) yPigPos += -yPigSpeed;

  if (keyIsDown(DOWN_ARROW)) yPigPos += yPigSpeed;

  if (keyIsDown(LEFT_ARROW)) xPigPos += -xPigSpeed;

  if (keyIsDown(RIGHT_ARROW)) xPigPos += xPigSpeed;
};
