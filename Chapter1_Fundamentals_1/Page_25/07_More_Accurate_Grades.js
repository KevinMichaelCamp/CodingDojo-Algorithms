/*For an additional challenge, add '-' signs to scores in the bottom 20% of A, B, C, & D scores, and '+' signs to the top 20% of B, C, & D scores (Dude never gives an A+(I changed it, he does now)).  Given 88, console.log "Score: 88, Grade: B+. \".  Given 61, log "Score: 61, Grade: D-".*/
function letterGrade(grade) {
  var letterGrade;

  if (grade >= 98) {
    letterGrade = 'A+';
  } else if (grade >= 93 && grade < 98) {
    letterGrade = 'A';
  } else if (grade >= 90 && grade < 93) {
    letterGrade = 'A-';
  } else if (grade >= 88 && grade < 90) {
    letterGrade = 'B+';
  } else if (grade >= 83 && grade < 88) {
    letterGrade = 'B';
  } else if (grade >= 80 && grade < 83) {
    letterGrade = 'B-';
  } else if (grade >= 78 && grade < 80) {
    letterGrade = 'C+';
  } else if (grade >= 73 && grade < 78) {
    letterGrade = 'C';
  } else if (grade >= 70 && grade < 73) {
    letterGrade = 'C-';
  } else if (grade >= 68 && grade < 70) {
    letterGrade = 'D+';
  } else if (grade >= 63 && grade < 68) {
    letterGrade = 'D';
  } else if (grade >= 60 && grade < 73) {
    letterGrade = 'D-';
  } else {
    letterGrade = 'F';
  }

  console.log("Score: " + grade + ".  Letter Grade: " + letterGrade + ".");
}

//Test Cases
console.log("Test Case 1");
var grade1 = 98;
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
