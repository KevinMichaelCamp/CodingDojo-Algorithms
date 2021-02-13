// Given a string, return whether all contained letters are in alphabetical order

function isAlphabetical(str){
    var alpha = ("abcdefghijklmnopqrstuvwxyz").split("");
    for(var i = 0; i < str.length - 1; i++){
        var loc1 = alpha.indexOf(str[i]);
        var loc2 = alpha.indexOf(str[i+1]);
        if(loc1 > loc2){
            return false
        }
    }
    return true;
}

console.log(isAlphabetical("abcdefg"));
console.log(isAlphabetical("hello"));