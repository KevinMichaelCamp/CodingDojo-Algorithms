function clockHandAngles(seconds){

  var wks;
  var hrs;
  var min;
  var sec;

  wks = seconds / 604800;
  seconds = seconds % 604800;
  hrs = seconds / 3600;
  seconds = seconds % 3600;
  min = seconds / 60;
  sec = seconds % 60;
  sec = seconds;

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
