function selectionSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// Test Cases
console.log(selectionSort([5, 7, 0]));
console.log(selectionSort([5, 7, 0, -10]));
console.log(selectionSort([5, 7, 0, -10, 4]));