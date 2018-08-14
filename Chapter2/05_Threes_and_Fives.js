/* First: Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5, but not both.  Display the final sum in the console.

Second: Create betterThreeFives(start, end) that allows you to enter arbitrary start and end values for your range.  Think of threeFives() as betterThreeFives(100, 4000000). */

//First function:

function threesFives(){

  var sum = 0;

  for(var i = 100; i <= 4000000; i ++){
    if(i % 3 == 0 && i % 5 == 0){
      continue;
    }
    if(i % 3 == 0 || i % 5 == 0){
      sum = sum + i;
    }
  }
  console.log(sum);
}

//Test
threesFives();

//Second function:

function threesFives(start, end){

  var sum = 0;

  for(var i = start; i <= end; i ++){
    if(i % 3 == 0 && i % 5 == 0){
      continue;
    }
    if(i % 3 == 0 || i % 5 == 0){
      sum = sum + i;
    }
  }
  console.log(sum);
}

//Test
threesFives(1, 400);
