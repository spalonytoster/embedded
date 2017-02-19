//#define TURNED_ON 1
//#define TURNED_OFF 0
#define LED 1
#define BUTTON 2
int counter = 0;
int lastButtonState = LOW;
int buttonState;
boolean isTurnedOn = false;

void setup() {
	pinMode(LED, OUTPUT);
	pinMode(BUTTON, INPUT);
}

void loop() {
	buttonState = digitalRead(BUTTON);
	if (buttonState != lastButtonState) {
		if (!isTurnedOn) {
			counter++;
		}
		else {
			counter--;
		}
		lastButtonState = buttonState;
	}

	if (counter == 0 && isTurnedOn) {
		isTurnedOn = false;
	}
	if (counter == 2 && !isTurnedOn) {
		isTurnedOn = true;
	}

	if (isTurnedOn) {
		digitalWrite(LED, HIGH);
	}
	else {
		digitalWrite(LED, LOW);
	}
}
