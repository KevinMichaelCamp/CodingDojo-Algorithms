/* Kailin sees beauty in numbers, but also believes that less is more.  Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit.  Return that one-digit result.  Example: sumToOne(938) returns 1, because 9 + 2 + 8 = 19, then 1 + 9 = 10, then 1 + 0 = 1. */

function sumToOne(num){

  var numString = num.toString();
  var numArray = [];
  console.log(numString);

  for(var i = 0; i < numString.length; i ++){
    numArray.push(Number(numString[i]));
  }

  console.log(numArray);
}

//Test Cases
console.log("Test Case 1");
var num1 = 938;
sumToOne(num1);
console.log("********************");
console.log("Test Case 2");
console.log("********************");
console.log("Test Case 3");
console.log("********************");
console.log("Test Case 4");
console.log("********************");
console.log("Test Case 5");
console.log("********************");
