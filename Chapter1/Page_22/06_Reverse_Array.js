/*Given array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, containing [2,4,6,1,3].*/

function reverseArray(arr) {
  var temp;

  for (var i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
reverseArray(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
reverseArray(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [0, 1, 0, 1, 0, 1, 0, 1];
reverseArray(arr3);
console.log('********************');
