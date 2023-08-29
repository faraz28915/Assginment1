"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(" ");
console.log("                                           WELCOME TO MY CALCULATOR");
console.log(" ");
// Importing Functions
var addition_1 = require("./addition");
var subtraction_1 = require("./subtraction");
var multiplication_1 = require("./multiplication");
var division_1 = require("./division");
var promptSync = require("prompt-Sync");
var prompt = promptSync();
//Taking Prompts
var num1 = prompt("Enter First Number: ");
num1 = parseInt(num1);
var num2 = prompt("Enter Second Number: ");
num2 = parseInt(num2);
var sign = prompt("Enter Operation: ");
sign = sign.toUpperCase();
//Applying Conditions
if (sign == '+' || sign == "ADD") {
    (0, addition_1.total)(sign, num1, num2);
}
else if (sign == '-' || sign == "MINUS" || sign == 'SUBTRACT') {
    (0, subtraction_1.sub)(sign, num1, num2);
}
else if (sign == 'X' || sign == "*" || sign == 'MULTIPLY') {
    (0, multiplication_1.multi)(sign, num1, num2);
}
else if (sign == '/' || sign == "DIVIDE") {
    (0, division_1.div)(sign, num1, num2);
}
