/* Create a function that, given a string, returns all of that string's contents, but without blanks.  If given the string "Pl   ayTha   tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic". */

function removeBlanks(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(removeBlanks("Pl   ayTha   tF   u  nkyM  usi    c  "));