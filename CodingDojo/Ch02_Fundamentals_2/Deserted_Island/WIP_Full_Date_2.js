function fullDate2(dayNum){
  var yearCount = Math.floor(dayNum / 365);
  var year = 2017 + yearCount;
  var leapYears = 0;

  // Edge Cases - make sure input is within 1-365 range
  if (dayNum < 1) {
    return "Day number must be a positive integer."
  }
  
  // Count leap years
  for(var j = 2020; j <= year; j += 4){
    leapYears ++;
  }
  console.log(yearCount, year, leapYears);


}

//Test Cases
fullDate2(365); //Dec 31 2017
fullDate2(366); //Jan 1 2018
fullDate2(730); //Dec 31 2018
fullDate2(731); //Jan 1 2019
fullDate2(1095); //Dec 31 2019
fullDate2(1096); //Jan 1 2020
fullDate2(1155); //Feb 29 2020 LEAP
