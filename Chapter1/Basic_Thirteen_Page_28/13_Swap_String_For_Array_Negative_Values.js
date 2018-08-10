//Given an array of numbers, replace any negative values with the string "Dojo".

function swapNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  console.log(arr);
}

//Test Cases
console.log('Test Case 1');
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
swapNegatives(arr1);
console.log('********************');
console.log('Test Case 2');
var arr2 = [1, -1, 2, -2, 3, -3];
swapNegatives(arr2);
console.log('********************');
console.log('Test Case 3');
var arr3 = [-1, -2, -3, -4, -5];
swapNegatives(arr3);
console.log('********************');
