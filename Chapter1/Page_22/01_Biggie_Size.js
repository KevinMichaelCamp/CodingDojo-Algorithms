/*Given an array, write a function that changes all positive numbers
 in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,'big','big',-5].*/

function makeItBig(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = 'big';
    }
  }
  console.log(arr);
}

//Test Case 1
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5];
makeItBig(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [-1, 3, 5, -5];
makeItBig(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [-1, -2, -3, -4, -5];
makeItBig(arr3);
console.log('********************');
