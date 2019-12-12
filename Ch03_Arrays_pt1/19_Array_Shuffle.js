/* In JavaScript, the Array object has numerous useful methods.  It does not, however, contain a method that will randomize the order of an array's elements.  Let's create shuffle(arr), to efficiently shuffle a given array's values.  Work in-place, naturally.  Do you need to return anything from your function? */

function shuffleArray(arr) {
    let curr_idx = arr.length;
    let temp, rand_inx;

    while (curr_idx !== 0) {
        rand_inx = Math.floor(Math.random() * curr_idx);
        curr_idx--;
        temp = arr[curr_idx];
        arr[curr_idx] = arr[rand_inx];
        arr[rand_inx] = temp;
    }

    return arr;
}

// Test Cases
myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffleArray(myArr));