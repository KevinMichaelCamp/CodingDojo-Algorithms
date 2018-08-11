/*Build a function that accepts an array.  Return a new array with all values except the first, adding 7 to each.  Do not alter the original array.*/

function addSevenToMost(arr){
  var newArr = [];

  for(var i = 1; i < arr.length; i ++){
    newArr.push(arr[i] + 7);
  }
  console.log(newArr);
}

//Test Cases
console.log('Test Case 1');
arr1 = [1,2,3,4,5,6,7,8,9];
addSevenToMost(arr1);
console.log('*********************');
console.log('Test Case 2');
arr2 = [-1,-2,-3,-4,-5];
addSevenToMost(arr2);
console.log('*********************');
console.log('Test Case 3');
arr3 = [0,1,0,1,0,2,0,3];
addSevenToMost(arr3);
console.log('*********************');
