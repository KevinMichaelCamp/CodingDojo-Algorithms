/*Build a function that takes an array of numbers.  The function should print the second to last value in the array, and return the first odd value in the array.*/

function printOneReturnAnother(arr) {
  var firstOdd;

  //print second to last value
  console.log(arr[arr.length - 2]);

  //return the first odd value
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      firstOdd = arr[i];
      console.log(firstOdd);
      return firstOdd;
    }
  }

}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOneReturnAnother(arr1);
console.log('*********************');
console.log('Test Case 2');
arr2 = [2, 4, 6, 8, 10];
printOneReturnAnother(arr2);
console.log('*********************');
console.log('Test Case 3');
arr3 = [0, 2, 4, -5, 6];
printOneReturnAnother(arr3);
console.log('*********************');
