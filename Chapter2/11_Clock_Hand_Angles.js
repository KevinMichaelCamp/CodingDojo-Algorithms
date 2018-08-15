// BEST EXAMPLE OF JAVASCRIPT SOFAR


/* Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind - like hands on a clock.  Traditional clocks are increasingly uncommon, but most can still read an analog clock's hands of hours, minutes, and seconds.  Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints the angle (in degrees) of the hour, minute, and second hands. For review: 360° form a full rotation.  For input of 3600 seconds (equivalent to 1:00:00), print "Hour hand: 30° - Minute hand: 0° - Second hand: 0°."  For an input parameter of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745° - Minute hand: 93° - Second hand: 180°."  Note: in the second example, the angle for the minute hand is not simply 90°; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

Second: also calculate and print degrees for an additional "week hand" that rotates once each week. */

function clockHandAngles(seconds){

  var time = seconds;
  var wks;
  var hrs;
  var min;
  var sec;

  //Week Hand

  wks = time / 604800;
  time = time % 604800;

  //Hour Hand
  if(time < 604800){
    hrs = time / 3600;
    time = time % 3600;
  }

  //Minute Hand
  if(time < 3600){
    min = time / 60;
    sec = time % 60;
  }

  //Second Hand
  if(time < 60){
    sec = time;
  }

  //Make Time Objects for table
  var weeks = {
    name : "Weeks",
    degrees : (wks * 360 + "°")
  }
  var hours = {
    name : "Hours",
    degrees : (hrs * 30) + "°"
  }
  var minutes = {
    name : "Minutes",
    degrees : (min * 6) + "°"
  }
  var seconds = {
    name : "Seconds",
    degrees : (sec * 6) + "°"
  }

  console.table([weeks, hours, minutes, seconds])
}

//Test Cases 1
console.log("Test Case 1");
console.log("1 Hr - 01:00:00");
var seconds1 = 3600;
clockHandAngles(seconds1);
console.log("*******************");
//Test Cases 2
console.log("Test Case 2");
console.log("6 Hrs, 30 Min - 06:30:00");
var seconds2 = 23400;
clockHandAngles(seconds2);
console.log("*******************");
//Test Cases 3
console.log("Test Case 3");
console.log("7 Hrs, 20 Min, 40 Sec - 07:20:40");
var seconds3 = 26440;
clockHandAngles(seconds3);
console.log("*******************");
//Test Case 4
console.log("Test Case 4");
console.log("1 Day, 7 Hrs, 20 Min, 40 Sec - 31:20:40");
var seconds4 = 112840;
clockHandAngles(seconds4);
console.log("*******************");
//Test Case 5
console.log("Test Case 5");
console.log("1 Week, 2 Hrs - 170:00:00");
var seconds5 = 612000;
clockHandAngles(seconds5);
console.log("*******************");
//Test Case 6
console.log("Test Case 6");
console.log("30 Min - 00:30:00");
var seconds6 = 1800;
clockHandAngles(seconds6);
console.log("*******************");
//Test Case 7
console.log("Test Case 7");
console.log("33 Sec - 00:00:33");
var seconds7 = 33;
clockHandAngles(seconds7);
console.log("*******************");
