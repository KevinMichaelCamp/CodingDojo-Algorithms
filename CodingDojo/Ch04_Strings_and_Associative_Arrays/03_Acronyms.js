/* Create a function that given a string, returns the string's acronym (first letters only, capitalized).  Given " there's no free lunch - gotta pay yer way.", return "TNFL-GPYW".  Given "Live from New York, it's Saturday Night!", return "LFNYISN". */

function acronyms(str) {
    var acronym = "";
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        acronym += arr[i].substr(0, 1).toUpperCase();
    }

    return acronym;
}

console.log(acronyms(" there's no free lunch - gotta pay yer way."));