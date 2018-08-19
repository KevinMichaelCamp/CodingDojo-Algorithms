// Date on a Deserted Island - Part 3

function weekdayName2(weekdayNum) {
  var day;
  var weekday = true;
  var dayModulo = weekdayNum % 7;

  switch (dayModulo) {
    case 1:
      day = "Sunday"
      weekday = false;
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
      weekday = false;
      break;
  }
  // Log weekday name
  console.log(day);
  if (weekday == true) {
    console.log("Work hard!!!");
  } else {
    console.log("Enjoy your day off!!!");
  }
}

function someDays() {
  for (var i = 1; i <= 17; i++) {
    // Random number between 1-365
    var random = Math.trunc(Math.random() * (365 - 1 + 1) + 1);
    weekdayName2(random);
  }
}

//Test Case
someDays();
