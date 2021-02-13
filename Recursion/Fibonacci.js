// Recursive functions returns nth digit of Fibonacci sequence

function rFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return rFibonacci(n - 1) + rFibonacci(n - 2);
}

console.log(rFibonacci(3));
console.log(rFibonacci(5));
console.log(rFibonacci(7));
console.log(rFibonacci(10));