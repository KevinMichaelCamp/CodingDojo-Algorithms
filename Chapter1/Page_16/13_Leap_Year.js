/*Write a function that determines whether a given year is a leap year.
If the year is divisible by four, it is a leap year, unless it is divisible
by 100.  However, if it divisible by 400, then it is a leap year.*/

function leapYear(year) {
  if (year % 400 === 0) {
    console.log(year + ' IS a leap year!');
  } else if (year % 100 === 0) {
    console.log(year + ' IS NOT a leap year.');
  } else if (year % 4 === 0) {
    console.log(year + ' IS a leap year!');
  } else {
    console.log(year + ' IS NOT a leap year.');
  }
}

//Test cases

console.log('Test Case 1');
leapYear(400); //leap year
console.log('********************');
console.log('Test Case 2');
leapYear(100); //not a leap year
console.log('********************');
console.log('Test Case 3');
leapYear(4); //leap year
console.log('********************');
console.log('Test Case 4');
leapYear(3); //not a leap year
console.log('********************');
console.log('Test Case 5');
leapYear(2020); //leap year
console.log('********************');
console.log('Test Case 6');
leapYear(2024); //leap year
console.log('********************');
