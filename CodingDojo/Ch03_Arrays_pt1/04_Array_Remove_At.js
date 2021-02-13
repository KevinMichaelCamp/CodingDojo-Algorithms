/* Given array and an index into array, remove and return the array value at that index.  Do this without using built-in array methods except pop().  Think of popFront(arr) as equivalent to removeAt(arr, 0). */

function arrayRemoveAt(arr, ind) {
  var temp = arr[ind];

  for (var i = ind; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = temp;
  return arr.pop();
}

//Test Cases
console.log("Test Case 1");
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ind1 = 3;
console.log(arrayRemoveAt(arr1, ind1));

console.log("Test Case 2");
var arr2 = [-1, 2, -3, "$$$", 4, -5];
var ind2 = 3;
console.log(arrayRemoveAt(arr2, ind2));
