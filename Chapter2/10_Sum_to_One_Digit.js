NEEDS FIXIN

/* Kailin sees beauty in numbers, but also believes that less is more.  Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit.  Return that one-digit result.  Example: sumToOne(938) returns 1, because 9 + 2 + 8 = 19, then 1 + 9 = 10, then 1 + 0 = 1. */

function sumToOne(num){

  //convert number to string
  var numString = num.toString();
  var numArray = [];
  var sum = 0;

  //Run while loop until numArray.length = 1
  while(numArray.length !== 0){
    for(var i = 0; i < numString.length; i ++){
      numArray.push(Number(numString[i]));
      sum = sum + numArray[i];
    }
  }

  //log number as array sequence
  console.log(numArray);
  console.log("The sum to one value of " + num + " is " + sum + ".");
}

//Test Cases
console.log("Test Case 1");
var num1 = 938;
sumToOne(num1);
console.log("********************");
console.log("Test Case 2");
var num2 = 123456789;
sumToOne(num2);
console.log("********************");
console.log("Test Case 3");
var num3 = 8675309;
sumToOne(num3);
console.log("********************");
console.log("Test Case 4");
var num4 = 666;
sumToOne(num4);
console.log("********************");
console.log("Test Case 5");
var num5 = 555;
sumToOne(num5);
console.log("********************");
