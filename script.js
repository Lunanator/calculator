
let input = "";

const one = document.getElementById("one");
one.addEventListener('click', () => {
    if (display.innerHTML = result) {
        display.innerHTML = input;
    }
    input += "1";
    display.innerHTML = input;     
});

const two = document.getElementById("two");
two.addEventListener('click', () => {
    input += "2";
    display.innerHTML = input;     
});

const three = document.getElementById("three");
three.addEventListener('click', () => {
    input += "3";
    display.innerHTML = input;     
});

const four = document.getElementById("four");
four.addEventListener('click', () => {
    input += "4";
    display.innerHTML = input;     
});

const five = document.getElementById("five");
five.addEventListener('click', () => {
    input += "5";
    display.innerHTML = input;     
});

const six = document.getElementById("six");
six.addEventListener('click', () => {
    input += "6";
    display.innerHTML = input;     
});

const seven = document.getElementById("seven");
seven.addEventListener('click', () => {
    input += "7";
    display.innerHTML = input;     
});

const eight = document.getElementById("eight");
eight.addEventListener('click', () => {
    input += "8";
    display.innerHTML = input;     
});

const nine = document.getElementById("nine");
nine.addEventListener('click', () => {
    input += "9";
    display.innerHTML = input;     
});

const add = document.getElementById("add");
add.addEventListener('click', () => {
    operator = "add";
    firstNum = input;
    input = [];    
});

const subtract = document.getElementById("subtract");
subtract.addEventListener('click', () => {
    operator = "subtract";
    firstNum = input;
    input = [];    
});

const multiply = document.getElementById("multiply");
multiply.addEventListener('click', () => {
    operator = "multiply";
    firstNum = input;
    input = [];    
});

const divide = document.getElementById("divide");
divide.addEventListener('click', () => {
    operator = "divide";
    firstNum = input;
    input = [];    
});

const equals = document.getElementById("equals");
equals.addEventListener('click', () => {
    secondNum = input;
    if (operator === "add") {
        result = Number(firstNum) + Number(secondNum);
    } else if (operator === "subtract") {
        result = Number(firstNum) - Number(secondNum);
    } else if (operator === "multiply") {
        result = Number(firstNum) * Number(secondNum);
    } else if (operator === "divide") {
        result = Number(firstNum) / Number(secondNum);
    }
    display.innerHTML = result
    input = "";
});

const display = document.getElementById("display");


let firstNum = "";
let secondNum = "";
let operator;
let result;


const operate = function(firstNum, secondNum, operator) {
    if (operator === "add") {
        return firstNum + secondNum;
    } else if (operator === "subtract") {
        return firstNum - secondNum;
    } else if (operator === "multiply") {
        return firstNum * secondNum;
    } else if (operator === "divide") {
        return firstNum / secondNum;
    }
}
