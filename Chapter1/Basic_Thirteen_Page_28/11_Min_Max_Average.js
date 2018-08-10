//Given an array, print the max, min and average values for that array.

function maxMinAvg(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  var avg;

  for (var i = 0; i < arr.length; i++) {
    //Calculate sum
    sum = sum + arr[i];
    //Find min & max
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  //Calculate average
  avg = sum / arr.length;

  //Log results
  console.log('The maximum value of array is ' + max + '.');
  console.log('The minimum value of array is ' + min + '.');
  console.log('The average value of array is ' + avg + '.');
}

//Test Cases
console.log('Test Case 1');
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
maxMinAvg(arr1);
console.log('*********************');
console.log('Test Case 2');
var arr2 = [-1, 1, 2, -2, 3, -3, 4, -4, 5, -5];
maxMinAvg(arr2);
console.log('*********************');
console.log('Test Case 3');
var arr3 = [2, 4, 55, 8, 7, 6565, 25, -1, -5];
maxMinAvg(arr3);
console.log('*********************');
