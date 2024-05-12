#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold('welcome to my word counter game!'));

let condition = true;
while(condition)
   
{const answers= await inquirer.prompt([

   


             {
                name:"sentence",
                type :"input",
                message:chalk.yellow.bold("enter your sentence to count the words"),
             },
            {
              name:"continue",
              message:"do you want to continue or Quit",
              type:"confirm",
              default:"false",

            }
             

            ]);        
let words=answers.sentence.trim().split(" ")
condition =(answers.continue);
console.log(words) 
console.log(chalk.red.bold(`your sentence word count is ${words.length}`))}
