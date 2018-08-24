/* Given a numerical array, reverse the order of values, in-place.  The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed.  Working "in-place" means that you cannot use a second array - move values within the array that you are given.   As always, do not use built-in functions such as splice(). */

function arrayReverse(arr) {
  var temp;

  for (var i = 0; i < (arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  console.log(arr);
}

//Test Cases
console.log("Test Case 1");
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayReverse(arr1);
console.log("********************");

console.log("Test Case 2");
var arr2 = ["dyslexic", "am", "I"];
arrayReverse(arr2);
console.log("********************");
