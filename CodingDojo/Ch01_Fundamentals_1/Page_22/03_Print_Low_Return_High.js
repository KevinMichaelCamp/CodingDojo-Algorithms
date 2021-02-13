/*Create a function that takes an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.*/

function printLowReturnHigh(arr) {
  var max = arr[0];
  var min = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log('The lowest value of the array is ' + min + '.');
  return max;
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printLowReturnHigh(arr1);
console.log('*********************');
console.log('Test Case 2');
arr2 = [-1, 2, -3, 4, -5, 6];
printLowReturnHigh(arr2);
console.log('*********************');
console.log('Test Case 3');
arr3 = [20, 0, -55, 62];
printLowReturnHigh(arr3);
console.log('*********************');
