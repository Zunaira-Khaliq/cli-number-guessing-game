#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please guess a number between 1-10."
    },
]);

if(answers.userNumber === randomNumber) {
    console.log("Congratulations! You guess the right number.");
}else {
    console.log("You guessed the wrong number, Please try again.");
};