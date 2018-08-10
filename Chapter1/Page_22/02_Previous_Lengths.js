/*You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.*/

function previousLengths(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1].length;
  }
  console.log(arr);
}

//Test Cases
console.log('Test Case 1');
arr1 = ['hi', 'there', 'girl'];
previousLengths(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = ['Kevin', 'Michael', 'Camp'];
previousLengths(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = ['', 'abcdefghijklmnopqrstuvwxyz', 'the end'];
previousLengths(arr3);
console.log('********************');
