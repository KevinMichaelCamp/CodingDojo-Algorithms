/*Do Fahrenheit and Celsius values equate at a certain number?  Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.*/

var fDegrees;

for (cDegrees = 200; cDegrees >= -200; cDegrees--) {
  fDegrees = (9 / 5 * cDegrees) + 32;
  if (fDegrees === cDegrees) {
    console.log('Its a match!!!  ' + cDegrees + '° celsius is equivalent to ' + fDegrees + '° fahrenheit.  The magic number.');
  }
}
