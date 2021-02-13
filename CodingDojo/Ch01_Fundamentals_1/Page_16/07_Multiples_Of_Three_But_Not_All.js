//Using a for loop, print multiples of 3 from -300 to 0.  Skip -3 & -6.

//Following instructions
for (var i = -300; i <= 0; i++) {
  if (i === -3 || i === -6) {
    continue;
  }
  if (i % 3 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

//Clean code
for (var i = -300; i <= 0; i += 3) {
  if (i === -3 || i === -6) {
    continue;
  } else {
    console.log(i);
  }
}
