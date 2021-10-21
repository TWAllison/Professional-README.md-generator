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
    },
     // Project Title
     {
        type: 'input',
        name: 'title',
        message: 'Enter your project title.',
        validate:titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log ('Please enter your project Title!');
                return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description.',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else {
                console.log ('Please enter your project description!');
                return false;
            }
        }
    },
    // Installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions on how to install your project.',
        validate: installInput => {
            if (installInput){
                return true;
            } else {
                console.log ('Please enter installation instructions!');
                return false;
            }
        }
    },
    // How to Use the app 
    {
        type: 'input',
        name: 'use',
        message: 'How do you use this App?',
        validate: useInput => {
            if (useInput){
                return true;
            } else {
                console.log ('Please describe how to use the App!');
                return false;
            }
        }
    },
    // Contribution instructions 
    {
        type: 'input',
        name: 'contribute',
        message: 'How can other Users contribute to your project?',
        validate: contributeInput => {
            if (contributeInput){
                return true;
            } else {
                console.log ('Please describe how others can contribute to your project!');
                return false;
            }
        }
    },
    // test information
    {
        type: 'input',
        name: 'test',
        message: 'How can you test this project?',
        validate: testInput => {
            if (testInput){
                return true;
            } else {
                console.log ('Please describe how to test this project!');
                return false;
            }
        }
    },
    // License (Mozilla-Public, Apache, MIT, or None) use checkbox instead of input 
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose the appropriate license for your project.',
        choices: ['Mozilla-Public', 'Apache', 'Mit', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log ('Choose a License for your Project!');
                return false;
            }
        }
    },

    // Email adress to contact with further questions 
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log ('Please enter your email address!');
                return false;
            }
        }
    }
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