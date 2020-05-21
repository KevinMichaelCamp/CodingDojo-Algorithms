/* You are given a string containing chars '0', '1', and '?'. For every '?', either '0' or '1' can be substituted. Write a recursive function to return array
of all valid strings with '?' chars expanded to '0' or '1'. */

function BinStrExp(str) {
    let result = [];
    rBinStrExp("", str, result);
    return result;
}

function rBinStrExp(name, rem, result) {
    if (rem == "") {
        result.push(name);
        return;
    }

    let new_rem = "";
    for (let i = 1; i < rem.length; i++) {
        new_rem += rem[i];
    }

    if (rem[0] == "?") {
        rBinStrExp(name + "1", new_rem, result);
        rBinStrExp(name + "0", new_rem, result);
    }
    else {
        rBinStrExp(name + rem[0], new_rem, result);
    }
}

// Test Cases
console.log(BinStrExp("0?0??"));
console.log(BinStrExp("??0?0??"));