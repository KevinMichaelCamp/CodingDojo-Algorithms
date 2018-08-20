/*Write a function that accepts any array, and returns a new array with the
array values that are greater than its 2nd value.  Print how many values this is.  What will you do if the array is only one element long?*/

function valuesGreaterThanSecond(arr) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      newArray.push(arr[i]);
    }
  }

  console.log(newArray);
}

//Test Case
console.log('Test Case 1');
valuesGreaterThanSecond([1, 2, 3, 4, 5, 6]);
console.log('*******************');
console.log('Test Case 2');
valuesGreaterThanSecond([7]);
console.log('*******************');
console.log('Test Case 3');
valuesGreaterThanSecond([2, 0, -3, 4, -5])
console.log('*******************');
