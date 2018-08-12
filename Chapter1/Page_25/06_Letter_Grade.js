/*Mr Cerise teaches high school math.  Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100.  Those getting 90+ get an "A", 80-89 get a "B", 70-79 earn a "C", 60-69 should be "D", and lower than 60 recieve an "F".  For example, given 88, you should log "Score: 88, Grade: B".  Given the score 61, log the string "Score: 68, Grade: D".*/


function letterGrade(grade) {
  var letterGrade;

  if (grade >= 90) {
    letterGrade = 'A';
  } else if (grade >= 80 && grade < 90) {
    letterGrade = 'B';
  } else if (grade >= 70 && grade < 80) {
    letterGrade = 'C';
  } else if (grade >= 60 && grade < 70) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  console.log("Score: " + grade + ".  Letter Grade: " + letterGrade + ".");
}

//Test Cases
console.log("Test Case 1");
var grade1 = 95;
letterGrade(grade1);
console.log("******************");
console.log("Test Case 2");
var grade2 = 82;
letterGrade(grade2);
console.log("******************");
console.log("Test Case 3");
var grade3 = 77;
letterGrade(grade3);
console.log("******************");
console.log("Test Case 4");
var grade4 = 60;
letterGrade(grade4);
console.log("******************");
console.log("Test Case 5");
var grade5 = 22;
letterGrade(grade5);
console.log("******************");
