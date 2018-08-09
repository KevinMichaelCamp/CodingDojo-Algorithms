//Print integers from 0 to 255, and with each integer print the sum so far.

var sum = 0;

for (var i = 0; i <= 255; i++) {
  sum = sum + i;
  console.log('Count is ' + i + '.  Sum is ' + sum + '.');
}
