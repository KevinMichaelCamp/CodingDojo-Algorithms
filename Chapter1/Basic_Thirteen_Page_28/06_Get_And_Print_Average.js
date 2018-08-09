//Analyze an array's values and print the average.

function getAndPrintAverage(arr) {
  //variables
  var sum = 0;
  var avg;

  //Calculate sum of array
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  //Calculate array average
  avg = sum / arr.length;
  console.log('Array sum = ' + sum + '.');
  console.log('Array mean average = ' + avg + '.');
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
getAndPrintAverage(arr1);
console.log('*******************');
console.log('Test Case 2');
arr2 = [78, -52, 66, 845, 24, 151, -5];
getAndPrintAverage(arr2);
console.log('*******************');
console.log('Test Case 3');
arr3 = [7];
getAndPrintAverage(arr3);
console.log('*******************');
