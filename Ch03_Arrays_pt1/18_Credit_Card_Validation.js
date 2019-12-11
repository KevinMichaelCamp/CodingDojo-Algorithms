/* The Luhn formula is sometimes used to validate credit card numbers.  Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

1. Set aside the last digit, do not include it in these calculations (until step 5);
2. Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
3. If any results are larger than 9, subtract 9 from them;
4. Add all numbers (not just our odds) together;
5. Now add the last digit back in - the sum should be a multiple of 10.

For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is 5,4,2,16. Post satep 3) we have [5,4,2,7], then following step 4) it becomes 18.  After step 5) our value is 20, so ultimately we return true.  If the final digit were any non multiple of 10, we would instead return false. */
function isCreditCardValid(digitArr) {
    // Step 1
    let len = digitArr.length;
    let digits = digitArr.slice(0, len - 1);
    let lastDigit = digitArr[len - 1];
    // Step 2
    for (let i = len - 2; i >= 0; i -= 2) {
        digits[i] *= 2;
    }
    // Step 3
    for (let j = 0; j < len - 1; j++) {
        if (digits[j] > 9) {
            digits[j] -= 9;
        }
    }
    // Step 4
    let total = 0;
    for (let k = 0; k < len - 1; k++) {
        total += digits[k];
    }
    // Step 5
    total += lastDigit;
    if (total % 10 == 0) {
        return true;
    } else {
        return false;
    }

}

// Test Cases
myCC = [6, 7, 6, 2, 7, 3, 7, 7, 1, 7, 3, 4, 7, 8, 1, 1]; // true
myCC2 = [5, 4, 2, 2, 0, 1, 2, 3, 6, 4, 5, 2, 0, 0, 1, 1]; // false
console.log(isCreditCardValid(myCC));
console.log(isCreditCardValid(myCC2));