/* Accept a string and return the number of non-space characters found in the string.  For example, given "Honey pie, you are driving me crazy", return 29 (not 35). */

function countNonSpaces(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      count++;
    }
  }
  return count;
}


console.log(countNonSpaces('Honey pie, you are driving me crazy'));