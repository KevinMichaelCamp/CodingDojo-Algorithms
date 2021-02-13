/*For [1,3,5,7,9,13], print values that are greater than its 2nd value.  Return
how many values it is.*/

var arr = [1, 3, 5, 7, 9, 13];
var num = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > arr[1]) {
    console.log(arr[i]);
    num++;
  }
}

//Test Case
console.log('********************');
console.log('Test Array - ' + arr + '.');
console.log('********************');
console.log('There were ' + num + ' values in array greater than value at index 2.');
console.log('********************');
