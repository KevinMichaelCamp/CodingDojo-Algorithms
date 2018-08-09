/*Create a function that accepts a number as an input.  Return a new array that
counts down by one, from the number (as array's 0th element) down to zero (as
the last element).  How long is the array?*/

function countdown(num) {
  var arr = [];

  for (var i = num; i >= 0; i--) {
    arr.push(i);
  }
  console.log('Countdown from ' + num + ' ... ' + arr);
  console.log('Length of array is ' + arr.length + '.');
}

//Test Cases
console.log('Test Case 1');
countdown(23);
console.log('********************');
console.log('Test Case 2');
countdown(0)
console.log('********************');
console.log('Test Case 3');
countdown(-7)
console.log('********************');
countdown(77)
