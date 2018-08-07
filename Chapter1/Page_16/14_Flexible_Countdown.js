/* Based on earlier "Countdown by Fours", given lowNum, highNum, mult, print
multiples of mult from highNum to lowNum, using a for loop.
Example - for (2,9,3) print 9 6 3 on succesive lines.*/

function flexCount(lowNum, highNum, mult) {
  for (var i = highNum; i >= lowNum; i--) {
    if (i % mult === 0) {
      console.log(i);
    }
  }
}

//Test cases
console.log('Test Case 1');
console.log('********************');
flexCount(2, 9, 3);
console.log('Test Case 2');
console.log('********************');
flexCount(1, 10000, 7);
