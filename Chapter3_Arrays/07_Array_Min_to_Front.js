/* Given an array of comparable values, move the lowest element to array's front, shifting backward any elements previously ahead of it.  Do not otherwise change the array's order.  Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.  As always, do this without using built-in functions. */

function arrayRemoveAt(arr, ind) {
  var temp = arr[ind];

  for (var i = ind; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = temp;
  return arr.pop();
}

function arrayInsertAt(arr, ind, val) {

  for (var i = arr.length; i >= ind; i--) {
    arr[i] = arr[i - 1];
  }

  arr[ind] = val;
}

function arrayMinToFront(arr){
  var min = arr[0];
  var minIndex;

  for(var i = 0; i < arr.length; i ++){
    if(arr[i] < min){
      min = arr[i]
      minIndex = i;
    }
  }

  arrayRemoveAt(arr, minIndex);
  arrayInsertAt(arr, 0, min);
  console.log(arr);
}

//Test Cases
console.log("Test Case 1");
var arr1 = [4,2,1,3,5];
arrayMinToFront(arr1);
console.log("********************");

console.log("Test Case 2");   // FIXME: more than one minimum value
var arr2 = [5,2,2,3,1,1];
arrayMinToFront(arr2);
console.log("********************");
