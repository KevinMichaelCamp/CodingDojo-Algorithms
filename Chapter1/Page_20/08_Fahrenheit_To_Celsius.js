/*Kelvin wants to convert between temperature scales.  Create fahrenheitToCelcius(fDegrees) that accepts a number in degrees Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees.  For review, {Fahrenheit =(9/5 * Celsius) + 32}.*/

function fahrenheitToCelcius(fDegrees) {
  var cDegrees;

  cDegrees = (fDegrees - 32) / 1.8);
console.log(fDegrees + '° Fahrenheit is equal to ' + cDegrees + '° Celcius.');
}

//Test Cases
console.log('Test Case 1');
fahrenheitToCelcius(100);
console.log('********************');
console.log('Test Case 2');
fahrenheitToCelcius(32);
console.log('********************');
console.log('Test Case 3');
fahrenheitToCelcius(0);
console.log('********************');
