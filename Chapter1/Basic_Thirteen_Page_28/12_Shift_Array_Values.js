/*Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.*/

function shiftArrayValues(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length] = 0;
  console.log(arr);
}

//Test Cases
console.log('Test Case 1');
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shiftArrayValues(arr1);
console.log('********************');
console.log('Test Case 2');
var arr2 = [-1, 2, -3, 4, -5];
shiftArrayValues(arr2);
console.log('********************');
console.log('Test Case 3');
var arr3 = [1, 555, 7, 8, 9, 65656, 22];
shiftArrayValues(arr3);
console.log('********************');
