const defaultResult = 0;
let currentResult = defaultResult;


function writeLog(operator, previusCalc, caclNumber) {
    const calcResult = `${previusCalc} ${operator} ${caclNumber}`;
    outputResult(currentResult, calcResult);
}
function getUserNumber () {
    return parseInt(userInput.value);
}
function calculateResult (calculationType) {
    if(
        calculationType === "ADD" ||
        calculationType === "SUBTRACT" ||
        calculationType === "DIVIDE" ||
        calculationType === "MULTIPLY"
        ) {
            const enteredNumber = getUserNumber();
            let initialResult = currentResult;
            let operator;
            if(calculationType === "ADD") {
                initialResult += enteredNumber;
                operator = "+";
            } else if(calculationType === "SUBTRACT") {
                currentResult -= enteredNumber;
                operator = "-";
            } else if(calculationType === "DIVIDE") {
                currentResult /= enteredNumber;
                operator = "/";
            } else {
                currentResult *= enteredNumber;
                operator = "*"
            }
            writeLog(operator, initialResult, enteredNumber)
        }
}
function add() {
   calculateResult("ADD")
}
function subtract() {
    calculateResult("SUBTRACT")
}
function divide() {
    calculateResult("DIVIDE")
}
function multiply() {
    calculateResult("MULTIPLY")
}

function clear() {
    const calcResult = 0;
    currentResult = 0;
    userInput.value = 0;
    outputResult(currentResult, calcResult)
}


addBtn.addEventListener('click', add); 
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);

clearResult.addEventListener('click', clear);
