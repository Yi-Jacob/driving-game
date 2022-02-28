// eslint-disable-next-line no-redeclare
/* global data */
/* exported data */

var $car = document.getElementById('car');

addEventListener('keydown', rotateCar);

function rotateCar(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'right';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'up';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'left';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'down';
  }
}

addEventListener('keydown', startCar);

addEventListener('keydown', handleStart);

var data = {
  location: {
    top: 0,
    left: 0
  }
};

function handleStart(event) {
  if (event.key === ' ') {
    setInterval(startCar, 16);
  }
}
var start = 0;
function startCar() {
  start += 3;
  $car.style.left = start + 'px';
  data.location.left = start;
}
