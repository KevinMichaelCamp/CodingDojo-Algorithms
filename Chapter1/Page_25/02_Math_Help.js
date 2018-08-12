/*Cartman doesn't really like math; he neeeds help. You are given two numbers - coefficients M and B in the equation Y = MX + B.  Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero).*/

//Linear equation of a line -> y=mx+b
//m = Slope, b = y-Intercept

function xIntercept(m, b) {
  var x = (-b / m);
  console.log('The x-intercept of the line is ' + x + '.');
}

//Test Cases
console.log('Test Case 1');
var slope = 2;
var yInt = 1;
xIntercept(slope, yInt);
console.log('*******************');
console.log('Test Case 2');
var slope = 5;
var yInt = 5;
xIntercept(slope, yInt);
console.log('*******************');
console.log('Test Case 3');
var slope = 2 / 3;
var yInt = 0;
xIntercept(slope, yInt);
console.log('*******************');
