/* Given the number of pairs of parentheses, return an array of strings,
 where each string represents a different valid way to order those 
 parentheses. Example: given 2, return ["()()", "(())"]. */

function printParenthesis(n) {
    let result = [];
    rParens("", n, 0, 0, result);
    return result;
}

function rParens(str, n, open, close, result) {
    if (open + close == n * 2) {
        result.push(str);
        return;
    }
    if (open < n) {
        rParens(str + "(", n, open + 1, close, result);
    }
    if (open > close) {
        rParens(str + ")", n, open, close + 1, result)
    }
}

// Test Cases
console.log(printParenthesis(2));
console.log(printParenthesis(3));
console.log(printParenthesis(4));
console.log(printParenthesis(6));
console.log(printParenthesis(7));