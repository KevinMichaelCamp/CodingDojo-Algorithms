function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

// Test Cases
console.log(insertionSort([5, 7, 0, -10, 4]));