/*Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!!!".  Every time the array has three evens in a row, print "Even more so!!!".*/

function evensAndOdds(arr) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
      console.log("That's odd!!!");
    } else if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
      console.log("Even more so!!!");
    }
  }
}
//Test Cases
console.log('Test Case 1');
arr1 = [1, 1, 1, 2, 3, 4, 5, 6, 6, 6];
evensAndOdds(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
evensAndOdds(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('********************');
