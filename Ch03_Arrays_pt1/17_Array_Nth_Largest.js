// Liam has "N" number of green belt stickers for excellent Python projects.  Given arr and N, return the Nth largest element, where (N-1) elements are larger.  Return null if needed. //

function arrayNthLargest(arr, n) {
    if (n < 2) {
        return null;
    }
    let len = arr.length;
    // sort array (selection sort)
    for (let i = 0; i < len - 1; i++) {
        // find min element index
        let min_idx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        //swap minimum
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr[len - n];
}

// Test Cases
myArr = [99, 98, 96, 95, 100, 97, 94];

console.log(arrayNthLargest(myArr, 2));
console.log(arrayNthLargest(myArr, 4));