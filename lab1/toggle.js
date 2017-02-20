// jshint esversion: 6
let buttonState = 'LOW';
let lastButtonState = 'LOW';
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
	if (buttonState !== lastButtonState) {
    lastButtonState = buttonState;
		if (lastButtonState === 'HIGH') {
      isTurnedOn = !isTurnedOn;
		}
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
