/* Replicate JavaScript's concat().  Create a standalone function that accepts two arrays.  Return a new array containing the first array's elements, followed by the second array's elements.  Do not alter the original arrays.  Example: arrayConcat(["a","b"], [1,2]) should return new array ["a","b",1,2]. */

function arrayConcat(arr1, arr2) {
  var newArray = [];

  for(var i = 0; i < arr1.length; i ++){
    newArray[i] = arr1[i];
  }
  for(var i = 0; i < arr2.length; i++){
    newArray[i + arr1.length] = arr2[i];
  }
  console.log(newArray);
}

//Test Cases
console.log("Test Case1");
var arr1 = ["a","b"];
var arr2 = [1,2];
arrayConcat(arr1, arr2);
