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
