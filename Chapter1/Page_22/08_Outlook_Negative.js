/*Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1).  Given [1,-3,5], return [-1,-3,-5].*/

function outlookNegative(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i] * -1);
    } else if (arr[i] <= 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
outlookNegative(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
outlookNegative(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [77, 0, -25, 55, 86, -55];
outlookNegative(arr3);
console.log('********************');
