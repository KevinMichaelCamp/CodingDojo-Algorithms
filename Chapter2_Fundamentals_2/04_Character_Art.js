/* From Star Art, derive the following that accept and draw the given characters, not just asterisks:

- drawLeftChars(num, char)
- drawRightChars(num, char)
- drawCenteredChars(num, char) */


//Part One - drawLeftChar
function drawLeftChar(num, char) {

  var string = '';

  //Build * string
  for (var i = 0; i < num; i++) {
    string = string + char;
  }

  //log string
  console.log(string);
}

//Test Cases
console.log("Test Case 1");
var num1 = 25;
drawLeftChar(num1, '&');
console.log("--------------------");
console.log("Test Case 2");
var num2 = 75;
drawLeftChar(num2, '%');
console.log("--------------------");
console.log("Test Case 3");
var num3 = 7;
drawLeftChar(num3, '#');
console.log("--------------------");


//Part Two - drawRightChar
function drawRightChar(num, char) {

  var string = '';
  var spaces = (75 - num);

  //Build spaces string
  for (var i = 0; i < spaces; i++) {
    string = string + ' ';
  }
  //Add stars to string
  for (var j = 0; j < num; j++) {
    string = string + char;
  }

  //Log string
  console.log(string);
}

//Test Cases
console.log("Test Case 1");
var num1 = 25;
drawRightChar(num1, '°');
console.log("--------------------");
console.log("Test Case 2");
var num2 = 75;
drawRightChar(num2, '≈');
console.log("--------------------");
console.log("Test Case 3");
var num3 = 7;
drawRightChar(num3, '⌡');
console.log("--------------------");

//Part Three - drawCenteredChar
function drawCenteredChar(num, char) {
  var string = "";
  var spaces = (75 - num);

  for (var i = 0; i < (spaces / 2); i++) {
    string = string + ' ';
  }

  for (var j = 0; j < num; j++) {
    string = string + char;
  }

  for (var n = 0; n < (spaces / 2); n++) {
    string = string + ' ';
  }

  console.log(string);
}

console.log("Test Case 1");
var num1 = 25;
drawCenteredChar(num1, 'Φ');
console.log("--------------------");
console.log("Test Case 2");
var num2 = 75;
drawCenteredChar(num2, '▐');
console.log("--------------------");
console.log("Test Case 3");
var num3 = 7;
drawCenteredChar(num3, '¶');
console.log("--------------------");
