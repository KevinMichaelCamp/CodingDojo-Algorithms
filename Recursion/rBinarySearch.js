/* Given a sorted array and a value, recursively determine whether value is found within array.
rBinarySearch([1,3,5,6],4) should return false.
rBinarySearch([4,5,6,8,12],5) should return true. */

function rBinarySearch(arr, num, start, end) {
    if (start == undefined) {
        start = 0;
    }
    if (end == undefined) {
        end = arr.length - 1;
    }
    if (start > end) {
        return false;
    }
    if (arr[start] == num) {
        return true;
    }
    return rBinarySearch(arr, num, start + 1, end);
}

// Test Cases
console.log(rBinarySearch([1, 3, 5, 7], 1));
console.log(rBinarySearch([1, 3, 5, 7], 7));
console.log(rBinarySearch([1, 3, 5, 7], 5));
console.log(rBinarySearch([1, 3, 5, 7], 4));
console.log(rBinarySearch([1, 3, 5, 7], 10));

