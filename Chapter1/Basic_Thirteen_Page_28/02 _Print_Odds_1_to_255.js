//Print all odd integers from 1 to 255.

//Using Modulo
for (var i = 1; i <= 255; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Least Code
for (var i = 1; i <= 255; i += 2) {
  console.log(i);
}
