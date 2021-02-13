// Star Wars Art

function starWars(num) {
  var string1 = "";
  var string2 = "";
  var string3 = "";
  var string4 = "";
  var string5 = "";
  var string6 = "";
  var string7 = "";
  var string8 = "";
  var tieBomber = "(>o<)";
  var tieFighter = "(=o=)";
  var xWing = ">o<";
  var yWing = ">*<";

  //Empire forces
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string1 = string1 + "   " + tieBomber + " ";
  }
  console.log(string1);
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string2 = string2 + " " + tieFighter + " ";
  }
  console.log(string2);
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string3 = string3 + "   " + tieBomber + " ";
  }
  console.log(string3);
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string4 = string4 + " " + tieFighter + " ";
  }
  console.log(string4);

  //Rebel scum
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string5 = string5 + "  " + yWing + "  ";
  }
  console.log(string5);
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string6 = string6 + " " + xWing + " ";
  }
  console.log(string6);
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string7 = string7 + "   " + yWing + " ";
  }
  console.log(string7);
  for (var i = 0; i < num; i += (Math.random() * (9 - 1 + 1) + 1)) {
    string8 = string8 + "  " + xWing + " ";
  }
  console.log(string8);

}

//Galactic Battle!!!
starWars(50);
