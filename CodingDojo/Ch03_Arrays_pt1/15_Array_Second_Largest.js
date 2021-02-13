FIX ME - if largest is first val
/* Return the second largest element of an array.  Given [42,1,4,Math.PI,7], return 7.  If the array is too short, return null. */

function arraySecondLargest(arr) {
  var max = arr[0];
  var almostMax = arr[0];

  //check array length
  if(arr.length < 2){
    return null;
  }

  //find max
  for(var i = 0; i < arr.length; i ++){
    if(arr[i] > max){
      max = arr[i]
    }
  }

  for(var i = 0; i <arr.length; i ++){
    if(arr[i] > almostMax && arr[i] < max){
      almostMax = arr[i];
    }
  }

  console.log(almostMax);
}

//Test Cases
console.log("Test Case1");
var arr1 = [1,2,3,4,5,6,7,8,9];
arraySecondLargest(arr1);
console.log("***************")

console.log("Test Case2");
var arr1 = [42,1,4,Math.PI,7];
arraySecondLargest(arr1);
console.log("***************")
