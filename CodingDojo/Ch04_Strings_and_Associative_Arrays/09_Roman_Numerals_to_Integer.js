/* Sept 16, 2014 headline: "Ancient Computer Found in Roman Shipwreck". (Antikythera Mechanism) Comprising 30 bronze gears, its wooden frame features 2000 chaaracters.  Given a string containing a Roman numeral representation of a positive integer, return the integer.  Remember that III is 3, DCIX is 609 and MXDII is 1492. */
function romanNumToInt(romanNumeral) {
    var lookup = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    var result = 0;
    var input = romanNumeral.split('');

    for (var i = 0; i < input.length; i++) {
        var currentLetter = lookup[input[i]];
        var nextLetter = lookup[input[i + 1]];
        if (currentLetter === undefined) {
            return 'null';
        } else {
            if (currentLetter < nextLetter) {
                result += nextLetter - currentLetter;
                i++;
            } else {
                result += currentLetter;
            }
        }
    };

    return result;
}

console.log(romanNumToInt("MMMMDLXII"));