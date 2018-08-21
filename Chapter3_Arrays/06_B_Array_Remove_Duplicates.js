/* Second:  Do this without using any nested loops. HINT: use another array*/

function arrayRemoveDuplicates(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);
}

//Test Cases
console.log("Test Case 1");
var arr1 = ["Alphabet", "Amazon", "Apple", "Apple", "Facebook", "Tesla", "Tesla"];
arrayRemoveDuplicates(arr1);
console.log("********************");

console.log("Test Case 2");
var arr2 = ["Alphabet", "Amazon", "Apple", "Apple", "Apple", "Facebook", "Tesla"];
arrayRemoveDuplicates(arr2);
console.log("********************");
