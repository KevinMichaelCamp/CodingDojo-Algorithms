/* Sara is looking to hire an awesome web developer and has received applications from various sources.  Her assistant alphabetized them but notices some duplicates.  Given a sorted array, remove duplicate values.  Because array elements are already in order, all duplicate values will be grouped together.  As with all these array challenges, do this without using any built-in array methods. */

function arrayRemoveDuplicates(arr){

  for(var i = 0; i < arr.length; i ++){
    if(arr[i] == arr[i + 1]){
      for(var j = i; j < arr.length; j++){
        arr[j] = arr[j + 1];
      }
      arr.length --; //remove last index
      i --;  //In case of threes or more
    }
  }

  console.log(arr);
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
