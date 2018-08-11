/*Given an array of numbers, create a function to replace the last value with the number of positive values.  Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.*/

function countPositives(arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      count++;
    }
  }

  arr[arr.length - 1] = count;
  console.log(arr);
  return arr;
}
//Test Cases
console.log('Test Case 1');
arr1 = [1, 3, 5, 7, 9];
countPositives(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [-1, 2, -3, 4, -5, 6];
countPositives(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
countPositives(arr3);
console.log('********************');
