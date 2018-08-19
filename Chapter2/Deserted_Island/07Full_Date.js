// Date on a Deserted Island - Part 7

function fullDate(dayNum) {
  var month;
  var day;
  var date;

  // Edge Cases - make sure input is within 1-365 range
  if (dayNum < 1 || dayNum > 365) {
    return "Day number must be between 1 & 365 (inclusive)."
  }

  // Find Month
  function dayToMonth(dayNum) {

    if (dayNum <= 31) {
      date = dayNum;
      month = "January";
    } else if (dayNum <= 59) {
      date = dayNum - 31;
      month = "February";
    } else if (dayNum <= 90) {
      date = dayNum - 59;
      month = "March";
    } else if (dayNum <= 120) {
      date = dayNum - 90;
      month = "April";
    } else if (dayNum <= 151) {
      date = dayNum - 120;
      month = "May";
    } else if (dayNum <= 181) {
      date = dayNum - 151;
      month = "June";
    } else if (dayNum <= 212) {
      date = dayNum - 181;
      month = "July";
    } else if (dayNum <= 243) {
      date = dayNum - 212;
      month = "August";
    } else if (dayNum <= 273) {
      date = dayNum - 243;
      month = "September";
    } else if (dayNum <= 304) {
      date = dayNum - 273;
      month = "October";
    } else if (dayNum <= 334) {
      date = dayNum - 304;
      month = "November";
    } else {
      date = dayNum - 334;
      month = "December"
    }
    return month;
  }

  // Find Day
  function dayName(dayNum) {
    var dayModulo = dayNum % 7;

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
    return day;
  }

  dayToMonth(dayNum);
  dayName(dayNum);
  console.log(day + ", " + month, date + ", 2017.");
}

//Test Cases
fullDate(1);
fullDate(31);
fullDate(32);
fullDate(59);
fullDate(60);
fullDate(90);
fullDate(91);
fullDate(120);
fullDate(121);
fullDate(151);
fullDate(152);
fullDate(181);
fullDate(182);
fullDate(212);
fullDate(213);
fullDate(243);
fullDate(244);
fullDate(273);
fullDate(274);
fullDate(304);
fullDate(305);
fullDate(334);
fullDate(335);
fullDate(365);

fullDate(324);
