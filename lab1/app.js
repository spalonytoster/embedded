// jshint esversion: 6
let counter = 0;
let buttonState = 'LOW';
let lastButtonState;
let isTurnedOn = false;

function setup() {
  $('#button').mousedown(() => {
    buttonState = 'HIGH';
  });
  $('#button').mouseup(() => {
    buttonState = 'LOW';
  });
}

function loop() {
  $('#led-status').text(isTurnedOn ? 'ON' : 'OFF');
  ///
	if (buttonState != lastButtonState) {
		if (!isTurnedOn) {
			counter++;
		}
		else {
			counter--;
		}
		lastButtonState = buttonState;
	}

	if (counter === 0 && isTurnedOn) {
		isTurnedOn = false;
	}
	if (counter === 2 && !isTurnedOn) {
		isTurnedOn = true;
	}

  if (isTurnedOn) {
    $('#led').addClass('red');
  }
  else {
    $('#led').removeClass('red');
  }
  console.log(buttonState);
}

$(() => {
  setup();
  let interval = setInterval(loop, 1);
});
