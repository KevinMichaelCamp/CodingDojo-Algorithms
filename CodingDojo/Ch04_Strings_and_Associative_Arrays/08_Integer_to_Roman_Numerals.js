/* Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation, I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.  Remember that 4 is IV, 349 is CCCIL, and 444 is CDXLIV. */

function integerToRomanNum(num) {
    var roman = "";
    var lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

console.log(integerToRomanNum(4562));