// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Give a Title of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a simple description of your Project?',
    },
    {
      type: 'checkbox',
      name: 'tableOfContents',
      message: 'Please select your Table of Contents?',
      choices: [
        "Description",
        "Table of Contents",
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Tests",
        "Questions",
      ]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Give a brief installation representation of your Project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Give a brief usage information of your Project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is your project license?',
      choices: [
        "MIT",
        "Apache",
        "Mozilla",
      ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Give a contribution guidelines of your Project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Give a test instruction of your Project?',
    },
    {
      type: 'input',
      name: 'askquestions',
      message: 'Do you have a question for the READMEGenerator author?',
    },

  ])
  .then((answers) => {
    console.log(answers)

    const badge = `![License: ${answers.license}](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=green)`

    const readmeText = `
# < ${answers.title} >
${badge}

## Description
${answers.description}

## Table of contents
* [Description](#description)
* [Screenshots](#screenshots)
* [Installation](#installation)
//         "Usage",
//         "License",
//         "Contributing",
//         "Tests",
//         "Questions",


## Screenshots

![??????????? Screenshot](https://github.com/APOLAKl/??????????????.jpg)


## Installation
${answers.installation}


## 🔗Link to Deployed Page URL
https://apolakl.github.io/????????????/

## 🔗 Link to GitHub Repo Page
https://github.com/APOLAKl/??????????  [![APOLAKl Repo Page](https://img.shields.io/github/stars/APOLAKl/??????????style=social)](https://github.com/APOLAKl/????????????)
    `


    fs.writeFile("./${answers.title}.md", readmeText, function() {
      console.log("File written successfully!")
    })


  })
}


// Function call to initialize app
init();
