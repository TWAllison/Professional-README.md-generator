// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promtQuestions = ([
    // github user name
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub Username.',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log ('Please enter your GitHub Username!');
                return false;
            }
        }
    }

    // Project Title

    // Project Description

    // Installation instructions

    // How to Use the app 

    // Contribution instructions 

    // test information

    // License (Mozilla-Public, Apache, MIT, or None) use checkbox instead of input 

    // Email adress to contact with further questions 
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promtQuestions)
    .then (function(userInput){
        console.log(userInput)
    })

}

// Function call to initialize app
init();