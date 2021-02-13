/* Given a string array and value (length), remove any strings shorter than length from array. */

function removeShorter(array, len) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length >= len) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeShorter(['Hello', 'my', 'name', 'is', "Kevin"], 3));