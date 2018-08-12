/*Stan learned something today: that directly decrementing an array's .length immediately shortens it by that amount.  Given array arr and number x, remove all except the last x elements, and return arr (changed and shorter).  Given ([2,4,6,8,10], 3), change the given array to [6,8,10] and return it.*/

function shortenArray(arr, x) {

  console.log(arr.slice(-x));
}

//Test Cases
console.log('Test Case 1');
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
length1 = 4;
shortenArray(arr1, length1);
console.log('********************');
console.log('Test Case 2');
arr2 = [2, 4, 6, 8, 10];
length2 = 3;
shortenArray(arr2, length2);
console.log('********************');
console.log('Test Case 3');
arr3 = [1, 2, 3];
length3 = 4;
shortenArray(arr3, length3);
console.log('********************');
