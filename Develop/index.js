// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();



const inquirer = require(`inquirer`);
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// WHEN I enter a description, installation instructions, 
// usage information, contribution guidelines, and test instructions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is a short description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What kind of usage information did you use?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How many contribution guidelines?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'How many test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub user name?',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: "list",
            message: "license choose please:",
            choices: ["MIT", "Eclipse", "IMB"],
            name: "license"
        },
        {
            type: 'correct',
            message: 'Is everything you enter correct?',
            name: 'correct',
        },
    ])
    .then((data) => {
        const filename = `README.md`;

        fs.writeFile(filename, generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
