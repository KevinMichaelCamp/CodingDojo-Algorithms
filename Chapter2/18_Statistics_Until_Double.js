/* Here's another game for New Year's Eve party.  Implement a '20-sided die' that randomly returns integers between 1 and 20 (inclusive).  Roll these, tracking statistics until you get a value twice in a row.  Display number of rolls, min, max, and average. */

function twentySidedDie() {
  var roll;

  roll = Math.trunc(Math.random() * (20 - 1 + 1) + 1);
  console.log(roll);
}

//Test Case
for (var i = 1; i <= 100; i++) {
  twentySidedDie();
}
