#include <wiringPi.h>

int main (void) {
  wiringPiSetup();
  pinMode (0, OUTPUT);
  pinMode (1, PWM_OUTPUT);

  while (1) {
    // orange
    pwmWrite(1, 1024); delay(500);
    pwmWrite(1, 128);

    // blue
    digitalWrite(0, HIGH); delay(500);
    digitalWrite(0,  LOW);
  }
  return 0 ;
}
