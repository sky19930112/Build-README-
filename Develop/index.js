// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Input title of project?",
        name: "title",
    },
    {
        type: 'input',
        message: "Description of the project?",
        name: "description",
    },
    {
        type: 'input',
        message: "Table of Contents?",
        name: "content",
    },
    {
        type: 'input',
        message: "How to install?",
        name: "installation",
    },
    {
        type: 'input',
        message: "What is the usage of this?",
        name: "usage",
    },
    {
        type: 'input',
        message: "Any license?",
        name: "license",
    },
    {
        type: 'input',
        message: "What can this App Contribut?",
        name: "contributing",
    },
    {
        type: 'input',
        message: "Tests?",
        name: "tests",
    },
    {
        type: 'input',
        message: "Any Questions?",
        name: "questions",
    },
];

// TODO: Create a function to write README file
function writeIntoFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("You generated a README file")
    });
}
const fileResult = util.promisify(writeIntoFile);


// TODO: Create a function to initialize app
async function initialize() {
    const data = await inquirer.prompt(questions);
    console.log("Your responses: ", data);
    const markdown = generateMarkdown(data);
    console.log(markdown);
    await fileResult('ExampleREADME.md', markdown);
}

// Function call to initialize app
initialize();
