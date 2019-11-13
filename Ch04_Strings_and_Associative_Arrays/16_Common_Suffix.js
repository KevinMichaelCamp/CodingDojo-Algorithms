// Write a function, that given a word array, returns the largest suffix common to all words.
// For ['deforestation', 'citation', 'conviction'] return 'tion'.

function commonSuffix(arr) {
    var idx = 0;
    var suffix = "";
    // commonSuffix = reversed suffix
    var commonSuffix = "";
    var minLength = arr[0].length;

    // find length of shortest string
    for (var k = 1; k < arr.length; k++) {
        if (arr[k].length < minLength) {
            minLength = arr[k].length;
        }
    }

    while (idx <= minLength) {
        // temp is an array of letters from each word in arr
        // it changes with each iteration through the while loop
        var temp = [];
        for (var word of arr) {
            temp.push(word[word.length - 1 - idx]);
        }

        // iterate through the temp array to see if every letter is the same
        for (var i = 0; i < temp.length - 1; i++) {
            // if at any point the letters change, return the commonSuffix
            if (temp[i] !== temp[i + 1]) {
                // reverse suffix to get commonSuffix
                for (var j = suffix.length - 1; j >= 0; j--) {
                    commonSuffix += suffix[j];
                }
                console.log(`common suffix is "${commonSuffix}"`);
                return commonSuffix;

            }
        }
        // if every letter in temp is the same, add one of the letters to suffix
        suffix += temp[0];
        idx++;
    }
}

commonSuffix(["deforestation", "citation", "conviction", "incarceration"]);