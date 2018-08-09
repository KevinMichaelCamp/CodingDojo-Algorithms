/*Given an array, return the sum of the first value in the array, plus the
array's length.  What happens if the array's value is not a number, but a string
(like "what?") or a boolean (like false)?*/

function firstPlusLength(arr) {
  var sum;

  sum = arr[0] + arr.length;
  console.log('Sum of first element and array length is ' + sum + '.');
}

//Test cases
console.log('Test Case 1');
firstPlusLength([3, 2, 9, 5, 6]);
console.log('********************');
console.log('Test Case 2');
firstPlusLength([-5, 6, -7, 5, 9]);
console.log('********************');
console.log('Test Case 3');
firstPlusLength([0]);
console.log('********************');
console.log('Test Case 4');
firstPlusLength([]);
console.log('********************');
