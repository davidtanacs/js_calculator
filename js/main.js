var memory = "0";
var current = "0";
var operation=0;
maxLength = 30;

function addDigit(digit) {
    if (current.length > maxLength)
    { current = 'Sorry, it\'s too long'}
    else {
        if ((eval(current) == 0) && (current.indexOf(".") == -1))
        {current = digit}
        else
        { current = current + digit}
    } 
    document.calculator.display.value = current;
}

function addDecimal(digit) {

}