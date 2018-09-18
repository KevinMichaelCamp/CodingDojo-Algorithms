/* Return th eelement that is N-from-array's-end.  Given ([5,2,3,6,4,9,7], 3), return 4.  If the array is too short, return null. */

function arrayNthToLast(arr, num) {
  // Check array length
  if(arr.length < num){
    return null;
  }

  console.log(arr[arr.length - num]);

}

//Test Cases
console.log("Test Case1");
var arr1 = [5,2,3,6,4,9,7];
var num1 = 3;
arrayNthToLast(arr1, num1);
console.log("*********************")

console.log("Test Case2");
var arr1 = ["My", "Name", "is", "Kevin", "Hello"];
var num1 = 2;
arrayNthToLast(arr1, num1);
console.log("*********************")
