/*Given an array, add 1 to odd indices of the array; arr[1] & arr[3], etc.  Console.log all values and return the array.*/

function incrementTheSecond(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i] = arr[i] + 1;
    }
    console.log(arr[i]);
  }
  return arr;
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
incrementTheSecond(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [-50, 50, -25, 25, -5, 5];
incrementTheSecond(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];
incrementTheSecond(arr3);
console.log('********************');
