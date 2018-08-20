/* After a particuliarly fabulous New Year's Eve party to end 2016, Eduardo wakes up to find himself stranded on a deserted island.  He misses home in Burbank, but at least now he can spend plenty of time outdoors - and you can't beat the commute!  To pass the time until he is rescued, he counts the sunrises.

1. Help Eduardo track what day of the week it is.  Create a weekdayName(weekdayNum) function that, given a number between 1 & 7, will console.log a string containing the day of the week for that number (given 1, log "Sunday").  Use a SWITCH statement.

2. Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365.  Return weekday as before, given number of days total.  "Sunday" still corresponds to 1.

3. Create a new function someDays() that calls weekdayName2() seventeen times, with randomly generated integers as high 365.  Log each result string.  If it is a weekday, add the phrase "Work hard!!!", and if it is a weekend day, add "Enjoy your day off!!!".

4. Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing the month for that number ("May" corresponds to 5).  Use an array, without loops.

5. Now expand monthName() to create monthToDays(monthNum), returning the number of days in the month, in the year 2017.  HINT: use a SWITCH statement for the days in each month.

6. Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued.  Is it spring yet?  It might as well be.  Build on monthName() to create dayToMonth(dayNum).  If a given day number since the year began, return the current month (assume it is NOT a leap year).  Given 75, return "March".

7. Eduardo builds a Dojo bootcamp on the island.  Initially his students only find Ninja Gold in caves, but eventually even his tree sloths can write code quickly!  Dojo classes meet Monday thru Friday, so let's reincorporate weekday into out calculations.  Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string.  He hardly remembers that fateful New Year's Eve party, but he knows it was a Saturday.  Given 142, return "Monday, May 22, 2017".

8. Time flies when you're at a Dojo - months in fact.  Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016.  This number can stretch into future years!  You can assume that any year divisible by four is a leap year and has a 29-day February.  Given 8475, return "Thursday, March 15, 2040".

9. Eduardo hacks the Google Maps API and adds this long-forgotten island back into the map.  Soon he is rescued!  News of his Hemingway-like stoicism make him famous for centuries.  Build fullDate3(dayNum) to handle days up to 140,000!
Note: years 2100, 2200, and 2300 are not leap years (although 2400 is).  Given 139947, return "Tuesday, February 29, 2400".

***** Having completed this epic saga, you are ready for additional concepts and chapters!  Journey safely... */
