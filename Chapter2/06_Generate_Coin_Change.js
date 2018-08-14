/* Change is inevitable (especially when breaking a twenty).  Make generateCoinChange(cents).  Accept a number of American cents, compute and print how to represent that amount with smallest number of coins.  Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).  After creating code - look to simplify/shorten code.

Example output:
94 cents can be represented by:
  quarters:   3
  dimes:      1
  nickels:    1
  pennies:    4

- Add half-dollar (50 cents) and dollar (100 cents) coins using only 40 additional characters or less. */

function generateCoinChange(cents) {

  var money = cents;
  var dol;
  var hd;
  var q;
  var d;
  var n;
  var p;

  if (cents >= 100) {
    dol = Math.floor(money / 100);
    money = money % 100;
  }
  if (money >= 50) {
    hd = Math.floor(money / 50);
    money = money % 50;
  }
  if (money >= 25) {
    q = Math.floor(money / 25);
    money = money % 25;
  }
  if (money >= 10) {
    d = Math.floor(money / 10);
    money = money % 10;
  }
  if (money >= 5) {
    n = Math.floor(money / 5);
    money = money % 5;
  }
  if (money >= 1) {
    p = money;
  }

  //create table
  var dollars = {
    name: "dollars",
    quantity: dol
  };
  var halfDollars = {
    name: "Half-Dollars",
    quantity: hd
  };
  var quarters = {
    name: "quarters",
    quantity: q
  };
  var dimes = {
    name: "dimes",
    quantity: d
  };
  var nickels = {
    name: "nickels",
    quantity: n
  };
  var pennies = {
    name: "pennies",
    quantity: p
  };

  console.log(cents + " cents can be broken into:");
  console.table([dollars, halfDollars, quarters, dimes, nickels, pennies]);
}

//Test Cases
console.log("Test Case 1");
console.log("******************");
generateCoinChange(3297);
