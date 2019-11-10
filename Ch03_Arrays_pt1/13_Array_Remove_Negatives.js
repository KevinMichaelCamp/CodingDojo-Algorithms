
/* Implement arrayRemoveNegatives() that accepts array, removes negative values, and returns the same array (not a copy), preserving the non-negative values' order.  As always, do not use built-in array functions. */

function arrayRemoveNegatives(arr) {
  var temp;

  console.log(arr);

  for(var i = 0; i < arr.length; i ++){
    if(arr[i] < 0){
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    console.log(arr);
  }
}

//Test Cases
console.log("Test Case1");
var arr1 = [1,-2,3,4,5,6];
arrayRemoveNegatives(arr1);
