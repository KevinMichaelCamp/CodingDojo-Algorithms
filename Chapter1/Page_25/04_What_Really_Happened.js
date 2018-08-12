/*Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another.  Change whatHappensToday() function to create whatReallyHappensToday().  In this new function test for each disaster independently, instead of assuming exactly one disaster will happen.  In other words, with this new function, all five might occur today - or none.  Maybe Kenny will survive.*/

function whatReallyHappensToday() {

  //Volcano
  var volcano = Math.floor(Math.random() * (101 - 1) + 1);
  if (volcano >= 1 && volcano <= 10) {
    console.log('A volcano errupts today!');
  }

  //Tsunami
  var tsunami = Math.floor(Math.random() * (101 - 1) + 1);
  if (tsunami >= 1 && tsunami <= 15) {
    console.log('Watch out, its a tsunami!');
  }

  //Earthquake
  var earthquake = Math.floor(Math.random() * (101 - 1) + 1);
  if (earthquake >= 1 && disaster <= 20) {
    console.log("An earthquake is a shakin'!");
  }

  //Blizzard
  var blizzard = Math.floor(Math.random() * (101 - 1) + 1);
  if (blizzard >= 1 && blizzard <= 25) {
    console.log('Brrr! A blizzard!');
  }

  //Meteor
  var meteor = Math.floor(Math.random() * (101 - 1) + 1);
  if (meteor >= 1 && meteor <= 30) {
    console.log('Meteors falling!');
  }
}

//Test run
console.log('FORECAST FOR TODAY -');
whatReallyHappensToday();
//Test run 100 times
for(var i = 0; i < 100; i ++){
  console.log('FORECAST FOR TODAY -');
  whatReallyHappensToday();
}
