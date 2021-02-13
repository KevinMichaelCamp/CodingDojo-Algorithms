/* Create a function that changes a given array to list each original element twice, retaining original order.  Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false]. */
function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        for (let j = arr.length - 1; j > i; j--) {
            arr[j + 1] = arr[j];
        }
        arr[i + 1] = arr[i];
    }
    return arr;
}

// Test Cases
let myArr = [4, "Ulysses", 42, false];
console.log(doubleTrouble(myArr));