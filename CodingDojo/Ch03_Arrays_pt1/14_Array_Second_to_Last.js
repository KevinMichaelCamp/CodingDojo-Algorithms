/* Return the second-to-last element of an array.  Given [42,true,4,"Kate",7], return "Kate".  If array is too short, return null. */

function arraySecondToLast(arr) {

  if(arr.length < 2){
    return null;
  }

  console.log(arr[arr.length - 2])
}

//Test Cases
console.log("Test Case1");
var arr1 = [42,true,4,"Kate",7];
arraySecondToLast(arr1);
console.log("********************")

console.log("Test Case2");
var arr1 = [1,2,3,4,5,6,7,8,9];
arraySecondToLast(arr1);
console.log("********************")
