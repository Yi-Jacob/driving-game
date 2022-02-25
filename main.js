var $car = document.getElementById('car');

addEventListener('keydown', rotateCar);

function rotateCar(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'east';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'south';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'west';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'north';
  }
}
