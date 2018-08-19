// Date on a Deserted Island - Part 2

function weekdayName2(weekdayNum) {
  var day;
  var dayModulo = weekdayNum % 7;

  switch (dayModulo) {
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
    case 0:
      day = "Saturday"
      break;
  }
  // Log weekday name
  console.log(day);
}

//Test Case
weekdayName2(8);
weekdayName2(364);
weekdayName2(251);
weekdayName2(18);
weekdayName2(54);
