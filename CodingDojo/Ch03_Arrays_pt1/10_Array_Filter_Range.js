FIXME

/* Alan is good at breaking secret codes.  One method is to eliminate values that lie within a specific known range.  Given arr and values min and max, retain only the array values between min and max.  Work in-place: return the array you are given, with values in original order.  No built-in array functions. */

function arrayFilterRange(arr, min, max) {
  var temp;

  for(var i = 0; i < arr.length; i ++){
    if(arr[i] < min){

    }
  }
  console.log(arr);
}

//Test Cases
console.log("Test Case1");
var arr1 =  [1,2,3,4,5,6,7,8,9];
var min1 = 2;
var max1 = 8;
arrayFilterRange(arr1, min1, max1);
console.log("********************");
