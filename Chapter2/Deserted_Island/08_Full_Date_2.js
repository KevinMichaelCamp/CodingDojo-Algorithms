// NEEDS LEAP YEAR FUNCTIONALITY

// Date on a Deserted Island - Part 8

function fullDate2(dayNum){
  var dayRem = dayNum % 365;
  var addYear = Math.floor(dayNum / 365);
  var year = 2017 + addYear;
  var month;
  var day;
  var date;
  var leapYear = false;

  // Edge Cases - make sure input is within 1-365 range
  if (dayNum < 1) {
    return "Day number must be a positive integer."
  }

  // Check for leap year
  if(year % 4 == 0){
    leapYear = true;
  }

  // Find Month
  function dayToMonth(dayRem) {

    if (dayRem <= 31) {
      date = dayRem;
      month = "January";
    } else if (dayRem <= 59) {
      date = dayRem - 31;
      month = "February";
    } else if (dayRem <= 90) {
      date = dayRem - 59;
      month = "March";
    } else if (dayRem <= 120) {
      date = dayRem - 90;
      month = "April";
    } else if (dayRem <= 151) {
      date = dayRem - 120;
      month = "May";
    } else if (dayRem <= 181) {
      date = dayRem - 151;
      month = "June";
    } else if (dayRem <= 212) {
      date = dayRem - 181;
      month = "July";
    } else if (dayRem <= 243) {
      date = dayRem - 212;
      month = "August";
    } else if (dayRem <= 273) {
      date = dayRem - 243;
      month = "September";
    } else if (dayRem <= 304) {
      date = dayRem - 273;
      month = "October";
    } else if (dayRem <= 334) {
      date = dayRem - 304;
      month = "November";
    } else {
      date = dayRem - 334;
      month = "December"
    }
    return month;
  }

  // Find Day
  function dayName(dayRem) {
    var dayModulo = dayRem % 7;

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

  dayToMonth(dayRem);
  dayName(dayRem);
  console.log(day + ", " + month, date + ",  " + year + ".");
}

//Test Cases
fullDate2(1);
fullDate2(2345);
fullDate2(8475);
