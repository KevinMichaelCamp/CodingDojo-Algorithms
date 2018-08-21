/* Given array, index, and additional value, insert the value into array at given index.  Do this without using built-in array methods.  You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val). */

function arrayInsertAt(arr, ind, val) {

  for (var i = arr.length; i >= ind; i--) {
    arr[i] = arr[i - 1];
  }

  arr[ind] = val;
  console.log(arr);
}

//Test Cases
console.log("Test Case 1");
var arr1 = [1, 2, 4, 5, 6];
var ind1 = 2;
var val1 = 3;
arrayInsertAt(arr1, ind1, val1);
console.log("******************");

console.log("Test Case 2");
var arr2 = ["I", "don't", "like", "it", "when", "you", "my", "sentences"];
var ind2 = 6;
var val2 = "finish";
arrayInsertAt(arr2, ind2, val2);
console.log("******************");
