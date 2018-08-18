/* If you already know who Ada Lovelace is, that's great!  She is significant.
  (from Wiki) Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.

  Given any number of size, return the most significant digit.  If you already know what strings are, that's great!  However, don't use them here.  Hint: use a while loop to bring the most significant digit into range where you can use the friendly modulus (%) operator.  The most significant digit is the leftmost non-zero digit of a number.  Given 12345, return 1.  Given 67.89, return 6.  Given 0.00987, return 9.

  Second: handle negative num values as well, doing what you think is appropriate. */

function mostSignificantDigit(num) {
  var sigDig;
  var absNum = Math.abs(num);

  if (absNum < 1) {
    while (absNum < 10) {
      absNum = absNum * 10;
      if (absNum >= 1 && absNum < 10) {
        sigDig = Math.trunc(absNum);
      }
    }
  } else if (absNum >= 1) {
    while (absNum > 1) {
      absNum = absNum / 10;
      if (absNum >= 1 && absNum < 10) {
        sigDig = Math.trunc(absNum)
      }
    }
  }

  console.log("The MOST significant digit of the number " + num + " is " + sigDig + ".");
}

//Test Cases

console.log("Test Case 1");
var num1 = 12345;
mostSignificantDigit(num1);
console.log("********************");

console.log("Test Case 2");
var num2 = 67.89;
mostSignificantDigit(num2);
console.log("********************");

console.log("Test Case 3");
var num3 = 0.00987;
mostSignificantDigit(num3);
console.log("********************");

console.log("Test Case 4");
var num4 = -.0000031456;
mostSignificantDigit(num4);
console.log("********************");

console.log("Test Case 5");
var num5 = -7500002356;
mostSignificantDigit(num5);
console.log("********************");
