/* Just the Facts, ma'am.  Factorials, that is.  Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the number (inclusive).  Example: factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5). */

function factorial(num) {

  var factorial = 1;

  for (var i = num; i > 0; i--) {
    factorial = factorial * i;
  }

  console.log(num + "! (" + num + " factorial) equals " + factorial + ".");
}

//Test Cases
console.log("Test Case 1");
num1 = 3;
factorial(num1);
console.log("********************");
console.log("Test Case 2");
num2 = 5;
factorial(num2);
console.log("********************");
console.log("Test Case 3");
num3 = 1;
factorial(num3);
console.log("********************");
console.log("Test Case 4");
num4 = 100;
factorial(num4);
console.log("********************");
console.log("Test Case 5");
num5 = 1000000;
factorial(num5);
console.log("********************");
