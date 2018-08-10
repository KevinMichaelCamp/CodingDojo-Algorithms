//Return the given array, after setting any negative values to zero.

function zeroOutNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
zeroOutNegatives(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [1, -2, 3, -4, 5, -6, 7, -8, 9];
zeroOutNegatives(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [-1, -2, -3, -4, -5, -6, -7, -8, -9]
zeroOutNegatives(arr3);
console.log('********************');
