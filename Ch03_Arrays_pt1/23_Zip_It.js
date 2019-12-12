/* Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with the first array.  Extra values from either array should be included afterward.  Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

Second: combine the two arrays' values into the first array, instead of into a new array.  Much more fun!!*/
function zipIt(arr1, arr2) {
    let newArr = [];
    for (var i = 0; i < arr1.length && i < arr2.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }

    for (let j = i; j < arr1.length; j++) {
        newArr.push(arr1[j]);
    }

    for (let k = i; k < arr2.length; k++) {
        newArr.push(arr2[k]);
    }

    return newArr;
}

// Test Cases
console.log(zipIt([10, 20, 30, 40], [1, 2]));


// In Place
function zipIt2(arr1, arr2) {
    for (var i = 0, j = 0; i < arr1.length && j < arr2.length; i += 2, j++) {
        for (var k = arr1.length - 1; k > i; k--) {
            arr1[k + 1] = arr1[k];
        }
        arr1[i + 1] = arr2[j];
    }
    for (var l = j; l < arr2.length; l++) {
        arr1.push(arr2[l]);
    }
    return arr1;
}


console.log(zipIt2([1, 2], [10, 20, 30, 40]));