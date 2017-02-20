#include <wiringPi.h>
#define BUTTON 4
#define LED 1

int main (void) {
  wiringPiSetup();
  pinMode (LED, OUTPUT);
  pinMode (BUTTON, INPUT);

  while (1) {
    // button
    int buttonPressed = digitalRead(BUTTON);
    // blue
    if (buttonPressed == LOW) {
      digitalWrite(LED, HIGH);
    }
    else {
      digitalWrite(LED,  LOW);
    }
  }
  return 0 ;
}
