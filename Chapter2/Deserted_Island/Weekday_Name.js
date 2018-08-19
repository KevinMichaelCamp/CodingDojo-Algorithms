// Date on a Deserted Island - Part 1

function weekdayName(weekdayNum) {
  var day;

  switch (weekdayNum) {
  case 1:
    day = "Sunday"
    break;
  case 2:
    day = "Monday"
    break;
  case 3:
    day = "Tuesday"
    break;
  case 4:
    day = "Wednesday"
    break;
  case 5:
    day = "Thursday"
    break;
  case 6:
    day = "Friday"
    break;
  case 7:
    day = "Saturday"
    break;
}
// Log weekday name
console.log(day);
}

//Test Day
weekdayName(1);
weekdayName(2);
weekdayName(3);
weekdayName(4);
weekdayName(5);
weekdayName(6);
weekdayName(7);
