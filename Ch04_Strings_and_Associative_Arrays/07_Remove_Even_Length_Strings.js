/* Build a standalone function to remove strings of even lengths from a given array.  For array containing ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with","C)","."], change that same array to ["Nope!", "Its", "Chris","."]. */
function removeEvenLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 == 0) {
      var temp = arr[i];
      for (var j = i; j < arr.length; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1] = temp;
      arr.pop()
      i--;
    }
  }
  return arr
}


console.log(removeEvenLength(["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."]));