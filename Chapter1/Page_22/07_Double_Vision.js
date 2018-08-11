/*Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6], without changing the original array.*/

function doubleVision(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
doubleVision(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5];
doubleVision(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [0, 1, 0, 2, 0, 515];
doubleVision(arr3);
console.log('********************');
