//Add odd integers from -300,000 to 300,000, console.log the final sum.
//Is there a shortcut?

var sum = 0;

for (var i = -300000; i <= 300000; i++) {
  if (i % 2 != 0) {
    sum = sum + i;
  } else {
    continue;
  }
}

console.log(sum);

//Clean code
var sum = 0;

for (var i = -299999; i <= 299999; i += 2) {
  sum += i;
}

console.log(sum);
