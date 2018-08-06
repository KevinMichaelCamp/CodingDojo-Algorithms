//Log positive numbers starting at 2016, counting down by fours (exclude 0).
//Without a for loop

//using modulo
var num = 2016;

while (num > 0) {
  if (num % 2 === 0) {
    console.log(num);
    num = num - 1;
  }
}

//Simplify

var num1 = 2016;

while (num1 > 0) {
  console.log(num1);
  num1--;
}
