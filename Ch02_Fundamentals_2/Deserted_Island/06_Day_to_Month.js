// Date on a Deserted Island - Part 6

function dayToMonth(dayNum) {
  // Edge Cases - make sure input is within 1-365 range
  if (dayNum < 1 || dayNum > 365) {
    return "Day number must be between 1 & 365 (inclusive).";
  } else if (dayNum <= 31) {
    return "January";
  } else if (dayNum <= 59) {
    return "February";
  } else if (dayNum <= 90) {
    return "March";
  } else if (dayNum <= 120) {
    return "April";
  } else if (dayNum <= 151) {
    return "May";
  } else if (dayNum <= 181) {
    return "June";
  } else if (dayNum <= 212) {
    return "July";
  } else if (dayNum <= 243) {
    return "August";
  } else if (dayNum <= 273) {
    return "September";
  } else if (dayNum <= 304) {
    return "October";
  } else if (dayNum <= 334) {
    return "November";
  } else {
    return "December"
  }
}

//Test Cases
console.log(dayToMonth(254));
console.log(dayToMonth(120));
console.log(dayToMonth(55));
console.log(dayToMonth(67));
console.log(dayToMonth(324));
console.log(dayToMonth(345));
