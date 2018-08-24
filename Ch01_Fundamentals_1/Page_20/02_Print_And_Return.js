/*Your function will return an array with two numbers.  Print the first value,
& return the second*/

function printAndReturn(num1, num2) {
  var arr = [num1, num2];

  console.log(num1);
  return num2;
}

//Test Cases
console.log('Test Case 1');
printAndReturn(7, 5);
console.log('********************');
console.log('Test Case 2');
printAndReturn(-5, 1000000);
console.log('********************');
console.log('Test Case 3');
printAndReturn(0, -2)
console.log('********************');
