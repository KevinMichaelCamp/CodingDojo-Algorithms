FIX ME
/* Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

1. If current count (not num) is evenly divisible by 3, don't add to sum; skip to the next count.

2. Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once.

3. Regardless of the above two cases, if current count is exactly 1/3 of num, return -1 immediately.

Example: If given number is 4, return 7.  If given number is 8, return 34.  If given number is 15, return -1. */

function messyMath(num){

  var sum = 0;
  var count = 0;

  for(var i = 0; i <= num; i ++){
    if((count / 3) == num){
      console.log(count, sum);
      console.log(-1);
      return -1;
    }
    if(count % 3 == 0){
      count ++;
      console.log(count, sum);
    }
    else if(count % 7 == 0){
      sum = sum + (i * 2);
      count ++;
      console.log(count, sum);
    }
    else{
      sum = sum + i;
      count ++;
      console.log(count, sum);
    }
  }
  return sum;
  console.log("The messy math sum of " + count + " numbers is " + sum + ".");
}

//Test cases
console.log("Test Case 1");
var num1 = 4;
messyMath(num1);
console.log("********************");
console.log("Test Case 2");
var num2 = 8;
messyMath(num2);
console.log("********************");
console.log("Test Case 3");
var num3 = 15;
messyMath(num3);
console.log("********************");
