// jshint esversion: 6
const DELAY = 250;
let buttonState = 'LOW';
let lastButtonState;
let isTurnedOn = false;
let start, end;

function setup() {
  $('#button').mousedown(() => {
    buttonState = 'HIGH';
  });
  $('#button').mouseup(() => {
    buttonState = 'LOW';
  });
}

function tap() {
  return lastButtonState == 'HIGH';
}

function doubleTap() {
  if (!start) {
    start = Date.now();
  }
  else {
    end = Date.now();
    console.log(end-start, ' ms');
    if (end - start <= DELAY) {
      return true;
    }
    else {
      start = Date.now();
    }
  }
  return false;
}

function loop() {
  $('#led-status').text(isTurnedOn ? 'ON' : 'OFF');
  ///

  if (buttonState !== lastButtonState) {
    if (tap()) {
      console.log('tapped');
      if (doubleTap()) {
        isTurnedOn = !isTurnedOn;
      }
    }
		lastButtonState = buttonState;
	}

  if (isTurnedOn) {
    $('#led').addClass('red');
  }
  else {
    $('#led').removeClass('red');
  }
}

$(() => {
  setup();
  let interval = setInterval(loop, 1);
});
