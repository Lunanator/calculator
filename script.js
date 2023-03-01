
let input = [];

const one = document.getElementById("one");
one.addEventListener('click', () => {
    input.push(1);
    display.innerHTML = input;     
});

const two = document.getElementById("two");
two.addEventListener('click', () => {
    input.push(2);     
});

const three = document.getElementById("three");
three.addEventListener('click', () => {
    input.push(3);     
});

const four = document.getElementById("four");
four.addEventListener('click', () => {
    input.push(4);     
});

const five = document.getElementById("five");
five.addEventListener('click', () => {
    input.push(5);     
});

const six = document.getElementById("six");
six.addEventListener('click', () => {
    input.push(6);     
});

const seven = document.getElementById("seven");
seven.addEventListener('click', () => {
    input.push(7);     
});

const eight = document.getElementById("eight");
eight.addEventListener('click', () => {
    input.push(8);     
});

const nine = document.getElementById("nine");
nine.addEventListener('click', () => {
    input.push(9);     
});

const add = document.getElementById("add");
add.addEventListener('click', () => {
    for (let i = 0; i < input.length; i++) {
        firstNum = firstNum + input[i];
    }
    input = [];    
});

const equals = document.getElementById("equals");
equals.addEventListener('click', () => {
    for (let i = 0; i < input.length; i++) {
        secondNum = secondNum + input[i];
    }
    result = Number(firstNum) + Number(secondNum);
    console.log(result);
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
