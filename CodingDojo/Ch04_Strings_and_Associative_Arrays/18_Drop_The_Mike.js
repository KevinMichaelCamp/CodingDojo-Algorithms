// Create a standalone function that accepts an input string, removes leading and trailing white space(at beginning and end)
// capitalizes the first letter of every word, and returns the string. If string contains the word 'Mike' anywhere, return
// 'stunned silence' instead.

function dropTheMike(str) {
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        if(str[i] == " ") {
            continue;
        }
        if (str[i] == "M" && str[i+1] == "i" && str[i+2] == "k" && str[i+3] == "e") {
            return "stunned silence"
        } else if (str[i-1] == " " || str[i-1] == undefined) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(dropTheMike("  asdf asdf asd fa sdf asdf "));