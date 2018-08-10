//Create an array with all the odd integers between 1 and 25 (inclusive).

//Using Modulo

var array1 = [];

for (var i = 0; i <= 25; i++) {
  if (i % 2 !== 0) {
    array1.push(i);
  }
}

console.log(array1);

//Optimized Algorithm
var array2 = [];

for (var i = 1; i <= 25; i += 2) {
  array2.push(i);
}

console.log(array2);
