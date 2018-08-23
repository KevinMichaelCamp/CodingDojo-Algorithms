/* Implement arrayRotate(arr, shiftBy) that accepts array and offset.  Shift array's values to the right by that amount.  "Wrap-around" any values that shift off the array's end to the other side, so that no data is lost in the process.  Operate in-place: given ([1,2,3], 1), change array to [3,1,2].  Don't use built-in functions.

Second: Allow negative shiftBy (shift left, instead of right).

Third: Minimize memory usage.  With no new array, handle arrays/shiftBys in the millions.

Fourth: Minimize the touches of each element. */

function arrayRotate(arr, shiftBy) {
  var temp = arr[arr.length - 1];

  while (shiftBy > 0) {

    for (var i = arr.length - 1; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = temp;
    temp = arr[arr.length - 1];
    shiftBy--;
  }
  console.log(arr);
}

//Test Cases
console.log("Test Case 1");
var arr1 = [1, 2, 3];
var shift1 = 1;
arrayRotate(arr1, shift1);
console.log("********************");

console.log("Test Case 2");
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var shift2 = 4;
arrayRotate(arr2, shift2);
