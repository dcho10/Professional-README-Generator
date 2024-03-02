// ## User Story

// ```md
// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project
// ```

// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```


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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log("Success!"))
}

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

// Function call to initialize app
init();