/* - Star Wars - Create an epic text-art Empire vs. the Rebellion battle scene, with ships like (>o<), (=o=), >o<, >*<. */

function starWars(num){
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
  for(i = 0; i < num; i += 7){
    string1 = string1 + tieBomber + " ";
  }
  console.log(string1);
  for(i = 0; i < num; i += 9){
    string2 = string2 + tieFighter + " ";
  }
  console.log(string2);
  for(i = 0; i < num; i += 4){
    string3 = string3 + tieBomber + " ";
  }
  console.log(string3);
  for(i = 0; i < num; i += 8){
    string4 = string4 + tieFighter + " ";
  }
  console.log(string4);

  //Rebel scum
  for(i = 0; i < num; i += 7){
    string5 = string5 + yWing + " ";
  }
  console.log(string5);
  for(i = 0; i < num; i += 9){
    string6 = string6 + xWing + " ";
  }
  console.log(string6);
  for(i = 0; i < num; i += 4){
    string7 = string7 + yWing + " ";
  }
  console.log(string7);
  for(i = 0; i < num; i += 8){
    string8 = string8 + xWing + " ";
  }
  console.log(string8);

}

//Galactic Battle!!!
starWars(100);
