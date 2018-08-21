/* Given array, remove and return the value at the beginning of the array.  Do this without using any built-in array methods except pop(). */

function arrayPopFront(arr) {
  var temp = arr[0];

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = temp;
  return arr.pop();
}

//Test Cases
console.log("Test Case 1");
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayPopFront(arr1));
console.log("********************");

console.log("Test Case 2");
var arr2 = [-245, 325, -21, 52];
console.log(arrayPopFront(arr2));
console.log("********************");
