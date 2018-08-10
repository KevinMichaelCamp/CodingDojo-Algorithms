//Square each value in a given array, returning that same array with changed values.

function squareArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
  console.log(arr);
}

//Test Cases
console.log('Test Case 1');
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
squareArray(arr1);
console.log('*******************');
console.log('Test Case 2');
var arr2 = [2, -7, 5, 6, 0, -10];
squareArray(arr2);
console.log('*******************');
console.log('Test Case 3');
var arr3 = [.5, 1000, 2525, -5050, .725];
squareArray(arr3);
console.log('*******************');
