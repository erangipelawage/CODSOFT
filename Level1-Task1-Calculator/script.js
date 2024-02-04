let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function clearLast() {
    let currentDisplay = display.innerText;
    display.innerText = currentDisplay.slice(0, -1);
}

function clearAll() {
    clearDisplay();
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
