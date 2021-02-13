/*Create celsiusToFahreheit(cDegrees) that accepts number of degrees Celsius and returns the equivalent temperature expressed in Fahrenheit degrees.*/

function celsiusToFahreheit(cDegrees) {
  var fDegrees;

  fDegrees = (9 / 5 * cDegrees) + 32;

  console.log(cDegrees + '° Celsius is equal to ' + fDegrees + '° Fahrenheit.');
}

//Test Cases
console.log('Test Case 1');
celsiusToFahreheit(100);
console.log('********************');
console.log('Test Case 2');
celsiusToFahreheit(32);
console.log('********************');
console.log('Test Case 3');
celsiusToFahreheit(0);
console.log('********************');
