/* Implement reverseString(str) that, given a string, returns that string with characterss reversed .  Given "creature", return "erutaerc".  Tempting as it seems, do not use the built-in reverse()! */

function reverseString(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("creature"));