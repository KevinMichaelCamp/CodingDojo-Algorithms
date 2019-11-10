//FIX ME PLEASE

/* Kailin sees beauty in numbers, but also believes that less is more.  Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit.  Return that one-digit result.  Example: sumToOne(938) returns 1, because 9 + 2 + 8 = 19, then 1 + 9 = 10, then 1 + 0 = 1. */

function sumToOne(num){
  if (num == 0){
    return 0
  }
  if (num % 9 == 0){
    return 9
  }
  else{
    return (num % 9)
  }
}

//Test Cases
console.log("Test Case 1");
var num1 = 938;
console.log(sumToOne(num1));
console.log("********************");
console.log("Test Case 2");
var num2 = 123456789;
console.log(sumToOne(num2));
console.log("********************");
console.log("Test Case 3");
var num3 = 8675309;
console.log(sumToOne(num3));
console.log("********************");
console.log("Test Case 4");
var num4 = 666;
console.log(sumToOne(num4));
console.log("********************");
console.log("Test Case 5");
var num5 = 555;
console.log(sumToOne(num5));
console.log("********************");
