/*Given an array arr and number num, multiply each arr value by num, and return the changed array.*/

function scaleTheArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  console.log(arr);
  return arr;
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num1 = 2;
scaleTheArray(arr1, num1);
console.log('********************');
console.log('Test Case 2');
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num2 = -1;
scaleTheArray(arr2, num2);
console.log('********************');
console.log('Test Case 3');
arr3 = [500, -250, 100, -50, 10];
num3 = .5;
scaleTheArray(arr3, num3);
console.log('********************');
