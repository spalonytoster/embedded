'use strict';
const wpi = require('wiring-pi');

const LED = 1;

wpi.setup('wpi');
wpi.pinMode(LED, wpi.OUTPUT);

let ledState = false;

setInterval(() => {
  ledState = !ledState;
  if (ledState) {
    wpi.digitalWrite(LED, wpi.HIGH); 
  }
  else {
    wpi.digitalWrite(LED, wpi.LOW);
  }
}, 1000);
