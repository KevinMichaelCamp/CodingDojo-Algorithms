//Iterate through a given array, printing each value.

function iterateArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//Test Cases
console.log('Test Case 1');
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
iterateArray(arr1);
console.log('********************');
console.log('Test Case 2');
var arr1 = [1];
iterateArray(arr1);
console.log('********************');
console.log('Test Case 3');
var arr1 = [2, -5, 9, 8, -6];
iterateArray(arr1);
console.log('********************');
