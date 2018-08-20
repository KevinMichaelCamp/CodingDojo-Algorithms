/*Given an array, swap first & last, third & third to last, etc. Example: Input array [true,42,'Ada',2,'pizza'] becomes ['pizza',42,'Ada',2,true].  Array [1,2,3,4,5,6] becomes [6,2,4,3,5,1].*/

function swapTowardsCenter(arr) {
  var temp;

  for (var i = 0; i < arr.length / 2; i++) {
    if (i % 2 === 0) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }

  console.log(arr);
}

//Test Cases
console.log('Test Case 1');
arr1 = [true, 42, 'Ada', 2, 'pizza'];
swapTowardsCenter(arr1);
console.log('********************');
console.log('Test Case 1');
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
swapTowardsCenter(arr2);
console.log('********************');
console.log('Test Case 1');
arr3 = ['Kevin', 0, -5, 'Camp', 77, false];
swapTowardsCenter(arr3);
console.log('********************');
