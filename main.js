#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let mypin = 49019;
console.log("Wellcome");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter yuor pin",
        type: "number"
    }
]);
if (pinAnswer.pin == mypin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            message: "piease select option",
            type: "list",
            choices: ["withdraw", "cheak balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "cheak balance") {
        console.log("your balance is" + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
