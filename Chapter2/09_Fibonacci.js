/* Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with the values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc.)  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc. */

function fibonacci(index) {

  var fibArray = [0, 1, 1];

  for (var i = 3; i <= index; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  console.log("The Fibonacci sequence index number " + index + " is " + fibArray[index] + ".");
}

//Test Cases
console.log("Test Case 1");
var index1 = 5;
fibonacci(index1);
console.log("********************");
console.log("Test Case 2");
var index2 = 7;
fibonacci(index2);
console.log("********************");
console.log("Test Case 3");
var index3 = 22;
fibonacci(index3);
console.log("********************");
console.log("Test Case 4");
var index4 = 50;
fibonacci(index4);
console.log("********************");
console.log("Test Case 5");
var index5 = 75;
fibonacci(index5);
console.log("********************");
