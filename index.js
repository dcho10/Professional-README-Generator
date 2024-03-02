// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [

        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "What does it do?",
            name: "functionality",
        },
        {
            type: "input",
            message: "Who the app is intended for?",
            name: "intention",
        },
        {
            type: "input",
            message: "Why did you created the app?",
            name: "creation",
        },
        {
            type: "input",
            message: "What were some victories you experienced along the way?",
            name: "victories",
        },
        {
            type: "input",
            message: "What were some challenges you experienced along the way?",
            name: "challenges",
        },

        {
            type: "input",
            message: "What needs to be installed in order for it to run? What are the steps to each installation?",
            name: "installation",
        },
        {
            type: "input",
            message: "Please provide step-by-step instructions and examples on how users can use your project.",
            name: "usage",
        },
        {
            type: "input",
            message: "Please include any sources/credits.",
            name: "credits",
        },
        {
            type: "input",
            message: "Please include any licensing (Apache, BSD, CDDL, Eclipse, GNU, MIT, Mozilla).",
            name: "license",
        },
        {
            type: "input",
            message: "Please include any Frequently Asked Questions (FAQ).",
            name: "questions",
        },
        {
            type: "input",
            message: "How can users contribte to your project?",
            name: "contribution",
        },
        {
            type: "input",
            message: "Please provide some tests users can run to verify the functionality of your code",
            name: "tests",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
    ];

// created prompt questions
// ==============================================================================================================================================================

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log("Success!"))
}

// created function writeToFile where fileName and data are parameters, if there is an arror, console will log the error, else console will log success once completed
// ==============================================================================================================================================================

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", data);
        })
        .catch(function (error) {
            console.error(error);
        });
}

// created function init, the inquirer prompt questions will have data, writeToFile creates README.md with the data that comes from the prompt and will catch any errors along the way
// ==============================================================================================================================================================

// Function call to initialize app
init();Open terminal and navigate to the location where you want the folder, run npm init-y to start Node.js and create a package.json file, run npm install inquirer@8.2.4 in order to get the npm, open the package.json file to make sure the package is included in the dependencies, and create index.js file to start using the package.