var current = "0";
maxLength = 30;

function addDigit(digit) {
    if (current.length > maxLength)
    { current = 'Sorry, it\'s too long'}
    else {
        try {
            if ((eval(current) == 0) && (current.indexOf(".") == -1))
            {current = digit}
            else
            { current = current + digit} }
        catch(err) {
            current = current + digit
        }
    
    } 
    document.calculator.display.value = current;
}

function addDecimal() {
    if (current[current.length - 1] == '.')
    { current = current}
    else
    {current = current + '.';}
    document.calculator.display.value = current;
}


function clearDisplay() {
    document.calculator.display.value = "";
    current = "0"
}

function addOperation(operation) {
    current = current + operation 
    document.calculator.display.value = current
}

function executeOperation() {
    current = eval(current)
    document.calculator.display.value = current
}