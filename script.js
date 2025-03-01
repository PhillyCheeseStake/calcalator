let display = document.getElementById('display');

// Append value to the display
function appendToDisplay(value) {
    if (display.value === 'Error' || display.value === 'Infinity') {
        clearDisplay();
    }
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        // Replace 'x' with '*' for multiplication
        let expression = display.value.replace(/x/g, '*');
        // Evaluate the expression
        let result = eval(expression);

        // Handle division by zero
        if (!isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Add event listeners for keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Allow numbers, operators, and decimal point
    if (/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});