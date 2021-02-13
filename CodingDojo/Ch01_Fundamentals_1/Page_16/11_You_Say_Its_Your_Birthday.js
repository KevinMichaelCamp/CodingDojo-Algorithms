//If 2 given numbers represent your birth month and day in either order,
//console.log "How did you know?", else log "Just another day..."

var birthDay = 20;
var birthMonth = 11;

function yourBirthday(num1, num2) {
  if ((num1 === birthDay && num2 === birthMonth) || (num2 === birthDay && num1 === birthMonth)) {
    console.log('How did you know?');
  } else {
    console.log('Just another day...');
  }
}


//Test cases
//True
console.log('Test Case 1 - Birthday = True');
yourBirthday(11, 20);
console.log('********************');
console.log('Test Case 2 - Birthday = True');
yourBirthday(20, 11);
console.log('********************');
//False
console.log('Test Case 3 - Birthday = False');
yourBirthday(12, 22);
console.log('********************');
console.log('Test Case 4 - Birthday = False');
yourBirthday(11, 11);
console.log('********************');
