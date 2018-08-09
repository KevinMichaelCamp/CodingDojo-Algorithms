//Given an array, find and print its largest element.

function findMaxAndPrint(arr) {
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  console.log('The largest value in the array is ' + max + '.');
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
findMaxAndPrint(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [-1, 5, 7, -10, 5];
findMaxAndPrint(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [-1, -5, -8];
findMaxAndPrint(arr3);
console.log('********************');
