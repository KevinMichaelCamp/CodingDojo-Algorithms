/*Your function should accept an array.  If value at [0] is greater than the array's length, print "Too Big!!!"; if value at [0] is less than array's length, print "Too Small!!!"; otherwise print "Ahhhh...Just Right!!!".*/

function fitTheFirstValue(arr) {
  if (arr[0] > arr.length) {
    console.log('Too Big!!!');
  } else if (arr[0] < arr.length) {
    console.log('Too Small!!!');
  } else {
    console.log('Ahhhh...Just Right!!!');
  }
}

//Test Cases
console.log('Test Case 1');
var arr1 = [7, 5, 3, 4, 6];
fitTheFirstValue(arr1);
console.log('********************');
console.log('Test Case 2');
var arr2 = [2, 1, 3, 5, 2, 9];
fitTheFirstValue(arr2);
console.log('********************');
console.log('Test Case 3');
var arr3 = [6, 5, 4, 3, 2, 1];
fitTheFirstValue(arr3);
console.log('********************');
