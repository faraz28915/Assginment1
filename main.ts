console.log(" ")
console.log("                                           WELCOME TO MY CALCULATOR")
console.log(" ")


// Importing Functions
import { total } from './addition';
import { sub } from './subtraction';
import { multi } from './multiplication';
import { div } from './division';

import * as promptSync from 'prompt-Sync'
const prompt = promptSync();



//Taking Prompts
let num1: any = prompt("Enter First Number: ");
num1 = parseInt(num1)

let num2: any = prompt("Enter Second Number: ");
num2 = parseInt(num2)

let sign: string = prompt("Enter Operation: ")
sign = sign.toUpperCase()


//Applying Conditions
if(sign == '+' || sign == "ADD"){
    total(sign, num1, num2)
}

else if(sign == '-' || sign == "MINUS" || sign == 'SUBTRACT'){    
    sub(sign, num1, num2)
}

else if(sign == 'X' || sign == "*" || sign == 'MULTIPLY'){
    multi(sign, num1, num2)
}

else if(sign == '/' || sign == "DIVIDE"){
    div(sign, num1, num2)
}