const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let firstValue = '';
let waitingForSecondValue = false;

function updateDisplay(value) {
    display.value = value;
}

function calcular(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Erro';
        default: return num2;
    }
}

function handleInput(value) {
    if (value === 'C') {
        currentInput = '';
        operator = '';
        firstValue = '';
        waitingForSecondValue = false;
        updateDisplay('');
        return;
    }

    if (value === '=') {
        if (firstValue && operator && currentInput) {
            const num1 = parseFloat(firstValue);
            const num2 = parseFloat(currentInput);
            let result = calcular(num1, num2, operator);
            updateDisplay(result);
            currentInput = result.toString();
            operator = '';
            firstValue = '';
            waitingForSecondValue = false;
        }
        return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput) {
            if (firstValue && operator) {
                const num1 = parseFloat(firstValue);
                const num2 = parseFloat(currentInput);
                let result = calcular(num1, num2, operator);
                firstValue = result.toString();
                updateDisplay(firstValue);
            } else {
                firstValue = currentInput;
            }
            operator = value;
            currentInput = '';
            waitingForSecondValue = true;
        }
        return;
    }

    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    updateDisplay(currentInput);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');
        if (button.id === 'clear') value = 'C';
        if (button.id === 'equal') value = '=';
        handleInput(value);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        handleInput(e.key);
    }
    if (['+', '-', '*', '/'].includes(e.key)) {
        handleInput(e.key);
    }
    if (e.key === 'Enter' || e.key === '=') {
        handleInput('=');
    }
    if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    }
    if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        handleInput('C');
    }
    if (e.key === '.') {
        handleInput('.');
    }
});