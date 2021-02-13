//  Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it:

function shuffle(array) {
    const len = array.length;
    for (let i = len - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Test
// counts of appearances for all possible permutations

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
  
// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}