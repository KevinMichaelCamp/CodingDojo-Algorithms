/* It's New Year's Eve, so let's play some dice games!  It'll be fun.  What could go wrong?

1. Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

2. Second, create a function playFives(num), which should call rollOne() multiple times - 'num' times, in fact, where 'num' is input parameter to playFives(num).  Each time, it should print the value rollOne() returns, and if that roll value is 5, also print "That's good luck!".

3. Third, create a new function playStatistics(), which should call rollOne() eight times (but not print anything after each call).  After the last of these eight calls, it should print out the lowest and highest value that it recieves from rollOne(), among those eight calls.

4. Fourth, make a copy of playStatistics() and add code to it to make playStatistics2(), that at the end (in addition to printing high & low rolls), it also prints the total sum of eight rolls.

5. Fifth, copy playStatistics2() and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.

6. Finally, make a copy of play playStatistics3 and change it to create playStatistics4(num), so that at the end instead of total sum, it prints the average roll. */

//Part 1
function rollOne(){
  var roll = Math.trunc(Math.random() * (6 - 1 + 1) + 1);
  // console.log("You have rolled a " + roll + ".");
  // if(roll == 5){
  //   console.log("That's good luck!");
  // }
  return roll;
}

//Part 2
function playFives(num){
  for(var i = 1; i <= num; i ++){
    console.log("Roll # " + i);
    rollOne();
  }
}

// //Test Case playFives(num)
// playFives(100);

//Part 3
function playStatistics(){
  var min = 6;
  var max = 1;

  for(var i = 1; i <= 8; i ++){
    var roll = rollOne();
    if(roll < min){
      min = roll;
    }
    if(roll > max){
      max = roll;
    }
  }
  //Log results
  console.log("Out of eight rolls, the minimum roll was " + min + " and the maximum roll was " + max + ".");
}

//Test Case
// playStatistics();

//Part 4
function playStatistics2(){
  var min = 6;
  var max = 1;
  var total = 0;

  for(var i = 1; i <= 8; i ++){
    var roll = rollOne();
    total = total + roll;
    if(roll < min){
      min = roll;
    }
    if(roll > max){
      max = roll;
    }
  }
  //Log results
  console.log("Out of eight rolls, the minimum roll was " + min + " and the maximum roll was " + max + ".");
  console.log("The total sum of all rolls is " + total + ".");
}

//Test Case
// playStatistics2();

//Part 5
function playStatistics3(num){
  var min = 6;
  var max = 1;
  var total = 0;

  for(var i = 1; i <= num; i ++){
    var roll = rollOne();
    console.log(roll);
    total = total + roll;
    if(roll < min){
      min = roll;
    }
    if(roll > max){
      max = roll;
    }
  }
  //Log results
  console.log("Out of " + num + " rolls, the minimum roll was " + min + " and the maximum roll was " + max + ".");
  console.log("The total sum of all rolls is " + total + ".");
}

// //Test Case
// console.log("Test Case 1");
// var num1 = 11;
// playStatistics3(num1);
// console.log("********************");
//
// console.log("Test Case 2");
// var num2 = 47;
// playStatistics3(num2);
// console.log("********************");
//
// console.log("Test Case 3");
// var num3 = 100000;
// playStatistics3(num3);
// console.log("********************");

//Part 6
