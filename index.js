let dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = '5px';

document.addEventListener('keydown', function(e) {
  console.log(e.key);
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left-5}px`;
  }
};
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);
  
  if (left < 360) {
    dodger.style.left = `${left + 5}px`;
  }
};
function moveDodgerUp() {
  let upNumbers = dodger.style.bottom.replace('px', '');
  let up = parseInt(upNumbers, 10);

  if (up < 380) {
    dodger.style.bottom = `${up+5}px`;
  }
};
function moveDodgerDown() {
  let downNumbers = dodger.style.bottom.replace('px', '');
  let down = parseInt(downNumbers, 10);

  if (down > 0) {
    dodger.style.bottom = `${down-5}px`;
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft()
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    moveDodgerRight()
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp') {
    moveDodgerUp()
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowDown') {
   moveDodgerDown()
  }
});
