/* Swap positions of successive pairs of values of given array.  If length is odd, do not change the final element.  For [1,2,3,4], return [2,1,4,3].  For example, change input ["Brendan", true, 42] to [true, "Brendan", 42].  As with all array challenges, do this without using any built-in array methods. */

function arraySwapPairs(arr) {
  var temp;

  for (var i = 0; i < arr.length - 1; i += 2) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  console.log(arr);
}

//Test Case
console.log("Test Case 1");
var arr1 = [1, 2, 3, 4];
arraySwapPairs(arr1);
console.log("*******************");

console.log("Test Case 2");
var arr2 = ["Brendan", true, 42];
arraySwapPairs(arr2);
console.log("*******************");
