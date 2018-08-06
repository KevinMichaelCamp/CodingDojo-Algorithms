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
yourBirthday(11, 20);
yourBirthday(20, 11);
//False
yourBirthday(12, 22);
yourBirthday(11, 11);
