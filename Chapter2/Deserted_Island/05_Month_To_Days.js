// Date on a Deserted Island - Part 5

function monthToDays(monthNum) {
  var month;
  var days;

  switch (monthNum) {
    case 1:
      month = "January";
      days = 31;
      break;
    case 2:
      month = "February";
      days = 28;
      break;
    case 3:
      month = "March";
      days = 31;
      break;
    case 4:
      month = "April";
      days = 30;
      break;
    case 5:
      month = "May";
      days = 31;
      break;
    case 6:
      month = "June";
      days = 30;
      break;
    case 7:
      month = "July";
      days = 31;
      break;
    case 8:
      month = "August";
      days = 31;
      break;
    case 9:
      month = "September";
      days = 30;
      break;
    case 10:
      month = "October";
      days = 31;
      break;
    case 11:
      month = "November";
      days = 30;
      break;
    case 12:
      month = "December";
      days = 31;
      break;
  }
  console.log("There are " + days + " in " + month + ".");
}

//Test Cases
monthToDays(1);
monthToDays(2);
monthToDays(3);
monthToDays(4);
monthToDays(5);
monthToDays(6);
monthToDays(7);
monthToDays(8);
monthToDays(9);
monthToDays(10);
monthToDays(11);
monthToDays(12);
