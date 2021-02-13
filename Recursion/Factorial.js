// Recursive functions n Factorial (n!)

function rFactorial(n) {
    if (n <= 1) {
        return n;
    }
    return n * rFactorial(n - 1);
}

// Test Cases
console.log(rFactorial(3));
console.log(rFactorial(5));
console.log(rFactorial(7));
console.log(rFactorial(10));