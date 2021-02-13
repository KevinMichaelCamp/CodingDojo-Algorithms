/*Kenny tries to stay safe, but somehow everyday something happens.  Out of the last 100 days, there were 10 days with volcanoes, 15 days with tsunamis, 20 with earthquakes, 25 blizzards, and 30 meteors(for 100 days total).  If these probabilities continue, write whatHappensToday() to print a day's outcome.*/

function whatHappensToday() {

  //generate random number between 1-100
  var disaster = Math.floor((Math.random() * (101 - 1)) + 1);


  //Volcano
  if (disaster >= 1 && disaster <= 10) {
    console.log('A volcano errupts today!');
  }
  //Tsunami
  else if (disaster > 10 && disaster <= 25) {
    console.log('Watch out, its a tsunami!');
  }
  //Earthquake
  else if (disaster > 25 && disaster <= 45) {
    console.log("An earthquake is a shakin'!");
  }
  //Blizzard
  else if (disaster > 45 && disaster <= 70) {
    console.log('Brrr! A blizzard!');
  }
  //Meteor
  else {
    console.log('Meteors falling!');
  }
}

//Test run
console.log('FORCAST FOR TODAY -');
whatHappensToday();

//Test run 100 times
for (var i = 0; i < 100; i++) {
  console.log('FORCAST FOR TODAY -');
  whatHappensToday();
}
