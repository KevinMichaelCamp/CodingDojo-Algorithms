/* Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Example: sigma(3) = 6(or 1 + 2 + 3) sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5). */

function sigma(num) {

  var sigma = 0;

  for (var i = num; i > 0; i--) {
    sigma = sigma + i;
  }

  console.log(sigma);
}

//Test Cases
console.log("Test Case 1");
var num1 = 3;
sigma(num1);
console.log("*********************");
console.log("Test Case 2");
var num2 = 5;
sigma(num2);
console.log("*********************");
console.log("Test Case 3");
var num3 = 1;
sigma(num3);
console.log("*********************");
console.log("Test Case 4");
var num4 = 100;
sigma(num4);
console.log("*********************");
console.log("Test Case 5");
var num5 = 1000000;
sigma(num5);
console.log("*********************");
