/* Given array and an additional value, insert this value at the beginning of the array.  Do this without using any built in array methods. */

function arrayPushFront(arr, val) {

  for (var i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  
  arr[0] = val;
  console.log(arr);
}

//Test Cases
console.log("Test Case 1");
var arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
var val1 = 1;
arrayPushFront(arr1, val1);
console.log("********************");

console.log("Test Case 2");
var arr2 = [-1, 2, -3, 4, -5];
var val2 = 0;
arrayPushFront(arr2, val2);
console.log("********************");

console.log("Test Case 3");
var arr3 = ["my", "name", "is", "Kevin"];
var val3 = "Hello";
arrayPushFront(arr3, val3);
console.log("********************");
