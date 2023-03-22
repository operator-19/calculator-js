let operator = ''
let previousValue = ''
let currentValue = ''

let clear = document.querySelector('#clear-btn');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');

// for each number add click function
numbers.forEach((number) => number.addEventListener('click', function (e) {
    handleNumber(e.target.textContent) // targets the text content which is that actual number pressed
    currentScreen.textContent = currentValue
}))

operators.forEach((op) => op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + ' ' + operator
    currentScreen.textContent = currentValue
}))

clear.addEventListener('click', function () {
    previousValue = ''
    currentValue = ''
    operator = ''
    previousScreen.textContent = currentValue
    currentScreen.textContent = currentValue
})

equal.addEventListener('click', function () {
    if (currentValue != '' && previousValue != '') { // only calculate if the use types in something
        calculate()
        previousScreen.textContent = ''
        if (previousValue.length <= 5) {
            currentScreen.textContent = previousValue
        } else {
            currentScreen.textContent = previousValue.slice(0, 5) + "..."
        }
    }
})

decimal.addEventListener('click', function () {
    addDecimal()
})

const handleNumber = (num) => {
    if (currentValue.length <= 5) { // limit unmbers on the screen
        currentValue += num; // update current value and show on screen
    } else {
        return
    }
}

const handleOperator = (op) => {
    // update the value of the current operator
    operator = op
    previousValue = currentValue
    currentValue = ''
}

const calculate = () => {
    // convert previous value to number
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if (operator === '+') {
        previousValue += currentValue
    } else if (operator === '-') {
        previousValue -= currentValue
    } else if (operator === 'x') {
        previousValue *= currentValue
    } else {
        previousValue /= currentValue
    }

    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString()
    currentValue = currentValue.toString()


}

// round number
const roundNumber = (num) => {
    return Math.round(num * 1000) / 1000
}

const addDecimal = () => {
    // it screen already includes a decimal don't add
    if (!currentValue.includes('.')) {
        currentValue += '.'
    }
}