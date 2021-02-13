/* Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it. */
function removeRange(arr, start, end) {
    for (var i = 1; i < end; i++) {
        for (var j = start; j < arr.length; j++) {
            arr[j] = arr[j + 1];
            console.log(arr);
        }
        arr.length--;
    }

    return arr;

}

// Test Cases
let myArr = [20, 30, 40, 50, 60, 70];
console.log(removeRange(myArr, 2, 4));