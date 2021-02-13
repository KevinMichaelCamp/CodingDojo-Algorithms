/* Given a string, use recursion to return array where each element is a string 
representing a different anagram (a different sequence of the letters in that 
string). For example, if given "lim", return ["ilm", "iml", "lim", "lmi", "mil", "mli"]. */

function StringAnagram(str) {
    let result = [];
    rStringAnagram("", str, result);
    return result;
}

function rStringAnagram(name, rem, result) {
    if (rem == "") {
        result.push(name);
        return;
    }

    for (let i = 0; i < rem.length; i++) {
        let new_rem = "";
        for (let j = 0; j < rem.length; j++) {
            if (i != j) {
                new_rem += rem[j];
            }
        }
        rStringAnagram(name + rem[i], new_rem, result);
    }
}

// Test Cases
console.log(StringAnagram("lim"));
console.log(StringAnagram("lima"));
