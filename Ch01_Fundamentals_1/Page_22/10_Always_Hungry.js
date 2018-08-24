/*Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry!!!" once.*/

function alwaysHungry(arr){
  var bool = false;

  for(var i = 0; i < arr.length; i ++){
    if(arr[i] === 'food'){
      console.log('Yummy!!!');
      bool = true;
    }
  }
  if(bool === false){
    console.log("I'm Hungry!!!");
  }
}

//Test Cases
console.log('Test Case 1');
arr1 = ['I', 'like', 'to', 'eat', 'food'];
alwaysHungry(arr1);
console.log('********************');
console.log('Test Case 2');
arr2 = ['food', 23, 'food', 565, 'food'];
alwaysHungry(arr2);
console.log('********************');
console.log('Test Case 3');
arr3 = ['You', 'need', 'groceries'];
alwaysHungry(arr3);
console.log('********************');
