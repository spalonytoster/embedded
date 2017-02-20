#include <stdbool.h>
#include <wiringPi.h>
#define BUTTON 4
#define LED 1

int lastState = HIGH;
bool isTurnedOn = false;

int main (void) {
  wiringPiSetup();
  pinMode (LED, OUTPUT);
  pinMode (BUTTON, INPUT);

  while (1) {
    int buttonPressed = digitalRead(BUTTON);

    if (buttonPressed != lastState) {
      lastState = buttonPressed;
      if (lastState == LOW) {
        isTurnedOn = !isTurnedOn;
      }
    }

    if (isTurnedOn) {
      digitalWrite(LED, HIGH);
    }
    else {
      digitalWrite(LED,  LOW);
    }
  }
  return 0 ;
}
