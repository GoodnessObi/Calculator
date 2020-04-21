// let num1 = document.getElementsByClassName('first-number');
// let num2 = document.getElementsByClassName('second-number');
// let mathResult = document.getElementsByClassName('total');
let num1;
let num2;
let symbol;

function doMath(num1, num2, symbol) {
    if (symbol === '+') {
        total = num1 + num2;
    } else if (symbol === '−') {
        total = num1 - num2;
    } else if (symbol === '×') {
        total = num1 * num2;
    } else {
        total = num1 / num2;
    }
    console.log(total);
    return total;
    
}

doMath(2, 10, '×');

// document.querySelector ('.calculator-keys');