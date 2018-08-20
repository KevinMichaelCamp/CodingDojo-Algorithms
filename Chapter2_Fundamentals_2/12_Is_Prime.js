/* Return whether a given number is prime.  Prime numbers are only divisible by themselves and 1.  Many highly optimized solutions exist, but for now just create one that is easy to understand and debug. */

function prime(num) {

  //boolean value for prime number
  var prime;

  //check for divisibilty up to num (exclusive)
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  //log whether number is prime or not
  if (prime == false) {
    console.log("The number " + num + " IS NOT a prime number.");
  } else {
    console.log("The number " + num + " IS a prime number.");
  }
}

//Test Cases
console.log("Test Case 1");
var num1 = 29;
prime(num1);
console.log("*******************");
console.log("Test Case 2");
var num2 = 33;
prime(num2);
console.log("*******************");
console.log("Test Case 3");
var num3 = 47;
prime(num3);
console.log("*******************");
console.log("Test Case 4");
var num4 = 52;
prime(num4);
console.log("*******************");
console.log("Test Case 5");
var num5 = 71;
prime(num5);
console.log("*******************");
