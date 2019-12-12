/* You will be given an array of numbers.  After every tenth element, add an additional element containing the sum of those ten values.  If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been inculded in one of the earlier sums.  Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]. */
function intermediateSums(arr) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        sum += arr[i];
        if (count == 10) {
            for (var j = arr.length - 1; j >= i; j--) {
                arr[j + 1] = arr[j];
            }
            arr[i + 1] = sum;
            count = 0;
            sum = 0;
            i++;
        }
    }
    if (sum > 0) {
        arr[arr.length] = sum;
    }

    return arr;
}

// Test Cases
console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));