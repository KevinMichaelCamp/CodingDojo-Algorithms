/* Assume that you have a text field that is exactly 75 characters long.  You want to fill it with spaces and asterisks('*'), sometimes called stars.  You should print the given number of asterisks consecutively.  Depending on which function is called, those stars should be left-justified (first star would be the very first character in the field), or right-justified(last star would be the very last character in the field, with potentially some number of spaces at the beginning of the text field before the block of stars starts), or centered in the 75 character text field (with the same number of spaces on either side of the block of stars, plus or minus one).

- Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

- Write a function drawRightStars(num) that prints 75 characters total.  Stars should build from the right side.  The num characters should be asterisks, the other (75 - num) should be spaces.

- Write a function drawCenteredStars(num) that prints 75 characters total.  Thes stars should be centered in the field of 75 characters.  The num characters should be asterisks, the other (75 - num) should be spaces. */

//Part One - drawLeftStars
function drawLeftStars(num){

  var string = '';

  //Build * string
  for(var i = 0; i < num; i ++){
    string = string + '*';
  }

  //log string
  console.log(string);
}

//Test Cases
console.log("Test Case 1");
var num1 = 25;
drawLeftStars(num1);
console.log("--------------------");
console.log("Test Case 2");
var num2 = 75;
drawLeftStars(num2);
console.log("--------------------");
console.log("Test Case 3");
var num3 = 7;
drawLeftStars(num3);
console.log("--------------------");


//Part Two - drawRightStars
function drawRightStars(num){

  var string = '';
  var spaces = (75 - num);

  //Build spaces string
  for(var i = 0; i < spaces; i ++){
    string = string + ' ';
  }
  //Add stars to string
  for(var j = 0; j < num; j ++){
    string = string + '*';
  }

  //Log string
  console.log(string);
}

//Test Cases
console.log("Test Case 1");
var num1 = 25;
drawRightStars(num1);
console.log("--------------------");
console.log("Test Case 2");
var num2 = 75;
drawRightStars(num2);
console.log("--------------------");
console.log("Test Case 3");
var num3 = 7;
drawRightStars(num3);
console.log("--------------------");

//Part Three - drawCenteredStars
function drawCenteredStars(num){
  var string = "";
  var spaces = (75 - num);

  for(var i = 0; i < (spaces / 2); i ++){
    string = string + ' ';
  }

  for(var j = 0; j < num; j++){
    string = string + '*';
  }

  for(var n = 0; n < (spaces / 2); n ++){
    string = string + ' ';
  }

  console.log(string);
}

console.log("Test Case 1");
var num1 = 25;
drawCenteredStars(num1);
console.log("--------------------");
console.log("Test Case 2");
var num2 = 75;
drawCenteredStars(num2);
console.log("--------------------");
console.log("Test Case 3");
var num3 = 7;
drawCenteredStars(num3);
console.log("--------------------");
