/* Here's another game for New Year's Eve party.  Implement a '20-sided die' that randomly returns integers between 1 and 20 (inclusive).  Roll these, tracking statistics until you get a value twice in a row.  Display number of rolls, min, max, and average. */

function twentySidedDie() {
  var roll;
  var previousRoll = 0;
  var numRolls = 0;
  var min = 20;
  var max = 1;
  var total = 0;
  var average;

  while (roll !== previousRoll) {
    previousRoll = roll;
    roll = Math.trunc(Math.random() * (20 - 1 + 1) + 1);

    numRolls++;
    total = total + roll;
    average = Math.round(total / numRolls);


    if (roll < min) {
      min = roll;
    }
    if (roll > max) {
      max = roll;
    }
    console.log(roll);
  }

  //Log Results
  console.log("You rolled " + numRolls + " times.");
  console.log("The minimum roll was " + min + '.');
  console.log("The maximum roll was " + max + '.');
  console.log("The total for all rolls was " + total + ".");
  console.log("Your average roll was " + average + ".");
}

//Test Case

twentySidedDie();
