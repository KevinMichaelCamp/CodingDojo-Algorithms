function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Test Cases
console.log(bubbleSort([5, 3, 1, 2]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([5, 3, 1, -1, -3]));
console.log(bubbleSort([5, 3, 1]));

