var current = "";

function addDigit(digit) {
    if (current.length > 30)
    { current = 'Sorry, it\'s too long'}
    else {
        if (current == "" || current == '0' && current.search('.') == false) {
            current = digit;
        }
        else {
            current = current + digit;
        } } 
    document.calculator.display.value = current;
}

function addDecimal() {
    if (current[current.length - 1] == '.'){
        current = current;
    }
    else{
        current = current + '.';
    }
    document.calculator.display.value = current;
}


function clearDisplay() {
    document.calculator.display.value = "";
    current = "0";
}

function addOperation(operation) {
    current = current + operation;
    document.calculator.display.value = current;
}

function executeOperation() {
    if (current.includes('%')) {
        current = calculatePercentage();
    }
    else {
        current = eval(current);
    }
    document.calculator.display.value = current;
}

function calculatePercentage() {
    var base = ""
    var percentage = ""
    var position = current.search('%')
    for (var i = 0; i < current.length; i++) {
        if (i < position) {
            base = base + current[i];
        }
        else if (i > position) {
            percentage = percentage + current[i];
        }
    }
    current = (eval(base) / 100) * eval(percentage);
    return current
}