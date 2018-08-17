/* Ever since you arrived at the Dojo, you wanted one of those Coding Dojo sweatshirts - maybe more than one.  Let's say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more.  He only accepts cash and says he doesn't have coins, so you should round up to the nearest dollar.  Build a function sweatshirtPricing(num) that, given a number of sweatshirt, returns the cost. */

function sweatshirtPricing(num){
  var price = 20;
  var discount = 0;
  var total;

  if(num = 1){
  }
  else if(num = 2){
    discount = (20 * .09) * num;
  }
  else if(num = 3){
    discount = (20 * .19) * num;
  }
  else{
    discount = (20 * .35) * num
  }
  total = price * num - discount;

  console.log("The total for " + num + " hoodie(s) is $" + total + ".");
  console.log("You recieved a $" + discount + " discount!");
}

//Test cases
console.log("Test Case 1");
num1 = 1;
sweatshirtPricing(num1);
console.log("********************");

console.log("Test Case 2");
num2 = 2;
sweatshirtPricing(num2);
console.log("********************");

console.log("Test Case 3");
num3 = 3;
sweatshirtPricing(num3);
console.log("********************");

console.log("Test Case 4");
num4 = 4;
sweatshirtPricing(num4);
console.log("********************");
