//Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThanY(arr, Y) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }

  console.log('There are ' + count + ' number of values greater than Y.');
}

//Test Cases
console.log('Test Case 1');
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
greaterThanY(arr1, 4);
console.log('*******************');
console.log('Test Case 2');
var arr2 = [5, -1, -5, 77, 5];
greaterThanY(arr2, 0);
console.log('*******************');
console.log('Test Case 3');
var arr3 = [-55, 5, 3, 7, 8];
greaterThanY(arr3, 9);
console.log('*******************');
