//converting integers to binary with toString(2)
var int = 5;
var bin = int.toString(2);
console.log(bin);

var int1 = 5280;
var bin1 = int1.toString(2);
console.log(bin1);

//Number() - converting string to number
var string = '5280'
var num = Number(string);
console.log(num);

//num.toFixed(n) - The toFixed() method converts a number into a string, keeping a specified number of decimals.
var num = 5280;
num1 = num.toFixed(2);
console.log(num1);

//Random numbers within range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//.slice - slices array at index number
arr = [1,2,3,4,5,6,7,8,9]
arr2 = arr.slice(-4)
console.log(arr2);
