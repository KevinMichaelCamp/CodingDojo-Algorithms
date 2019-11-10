/* Create a JavaScript function that given a string, returns the integer made from that string's digits.  Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680. */

function getDigits(str) {
    var nums = ('0123456789').split("");
    console.log(nums);
    var digits = "";
    for (var i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) {
            digits += str[i];
        }
    }
    return digits;
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));