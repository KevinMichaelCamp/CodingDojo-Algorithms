/*This function borrows ideas from the Fibonacci series, but the calculated
results appear to zig and zag, hence the name. A so-called 'Zibonacci' series
would be defined by the following rules:

1) Zib(0) == 1;
2) Zib(1) == 1;
3) Zib(2) == 2;
4) Zib(2n + 1) == Zib(n) + Zib(n - 1) + 1, if n > 0(i.e.odd values 3 and higher)
5) Zib(2n) == Zib(n) + Zib(n + 1) + 1, if n > 1(i.e.even values 4 and higher).
*/

function Zibonacci(num) {
    if (num < 2) {
        return 1;
    }
    else if (num == 2) {
        return 2;
    }
    else if (num % 2 == 1) {
        return Zibonacci((num - 1) / 2) + Zibonacci((num - 1) / 2 - 1) + 1;
    }
    else {
        return Zibonacci(num / 2) + Zibonacci(num / 2 + 1) + 1;
    }
}

//Test Cases
console.log(Zibonacci(0));
console.log(Zibonacci(1));
console.log(Zibonacci(2));
console.log(Zibonacci(3));
console.log(Zibonacci(4));
console.log(Zibonacci(5));
console.log(Zibonacci(6));
console.log(Zibonacci(10));
console.log(Zibonacci(11));