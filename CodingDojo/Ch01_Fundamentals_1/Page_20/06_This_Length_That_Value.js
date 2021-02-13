/*Given two numbers, return array of length num1 with each value num2.  Print "Jinx!!!" if they are the same.*/

function thisLengthThatValue(num1, num2) {
  var arr = [];

  for (var i = 0; i < num1; i++) {
    arr.push(num2);
  }
  console.log(arr);

  if (num1 === num2) {
    console.log('Jinx!!!');
  }
}

//Test Cases
console.log('Test Case 1');
thisLengthThatValue(3, 6);
console.log('********************');
console.log('Test Case 2');
thisLengthThatValue(0, 5);
console.log('********************');
console.log('Test Case 3');
thisLengthThatValue(7, 7);
console.log('********************');
