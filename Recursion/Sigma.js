// Recursive functions Sigma n

function rSigma(n) {
    if (n <= 1) {
        return n;
    }
    return n + rSigma(n - 1);
}

// Test Cases
console.log(rSigma(3));
console.log(rSigma(5));
console.log(rSigma(7));
console.log(rSigma(10));