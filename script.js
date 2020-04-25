
let symbol = document.querySelectorAll('.math-keys');
let display = document.getElementById('math-result');



symbol.forEach(item => {
    item.addEventListener('click', event => {
      //handle click
        let num1 = document.getElementById('first-number');
        let num2 = document.getElementById('second-number');
        const num1Val = parseInt(num1.value);
        const num2Val = parseInt(num2.value);
 
        let total = doMath(num1Val, num2Val, item.innerText);

        display.innerText = total;
    })
  })

function doMath(num1Val, num2Val, operator) {
    if (operator === '+') {
        total = num1Val + num2Val;
    } else if (operator === '−') {
        total = num1Val - num2Val;
    } else if (operator === '×') {
        total = num1Val * num2Val;
    } else {
        total = num1Val / num2Val;
    }
    return total;
    
}

