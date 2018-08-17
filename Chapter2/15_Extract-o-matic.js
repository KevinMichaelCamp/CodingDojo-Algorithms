/* Create the extractDigit(num, digitNum) function that given a number and a digit number, returns the numerical value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc.  Given (1824, 2), return 8.  Given (1824, 0), return 4.  Given (1824, 7), return 0.

Second: handle negative digitNumber values, where -1 represents tenths digit (0.x), -2 represents hundreths digit (0.0x), etc. Given (123.45, -1) return 4.  Given (123.45, -2) return 5.

Third: handle negative num values as well, doing what you think is appropriate */

function extractDigit(num, digitNum) {
  var absNum = Math.abs(num);           // var for absolute value of num
  var numString = absNum.toFixed(2);       // var for num as a string
  var absDig = Math.abs(digitNum);      // var for absolute value for digitNum
  var decInd;                           // var for index of decimal point
  var stringDig;                        // var for string of digit
  var number;                           // var for number (return value)

  if (digitNum >= 1) {
    stringDig = numString[digitNum - 1];
  }

  else {
    for (var i = 0; i < numString.length; i++) {
      if(numString[i] === '.'){
        decInd = i;
      }
    }
    stringDig = numString[decInd + absDig];
  }

  number = Number(stringDig);

  console.log("Digit number " + digitNum + " of " + num + " is " + number + ".");
}

//Test Case #1

console.log("Test Case 1");
var num1 = 1824;
var digitNum1 = 2;
extractDigit(num1, digitNum1);
console.log("*******************");

console.log("Test Case 2");
var num2 = 123.45;
var digitNum2 = -2;
extractDigit(num2, digitNum2);
console.log("*******************");

console.log("Test Case 3");
var num3 = -1824;
var digitNum3 = 2;
extractDigit(num3, digitNum3);
console.log("*******************");
