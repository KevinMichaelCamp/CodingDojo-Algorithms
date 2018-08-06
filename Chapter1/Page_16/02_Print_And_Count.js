//PRINT & COUNT - p.16
//Print all integer multiples of 5, from 512 to 4096.  Afterward, also log how many of these there were.

//Following intructions
for (var i = 512; i <= 4096; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

//Clean code
for (var i = 515; i <= 4095; i += 5) {
  console.log(i);
}
