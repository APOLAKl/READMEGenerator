// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// function to initialize app
function init() {
  inquirer
  .prompt([
    // array of questions for user input
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Give a Title to your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a simple description of your Project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Code to install required NPM?',
      default: 'npm i inquirer@8.2.4',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Give a brief usage information of your Project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can users contribute to the Repo?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Code to test your Project?',
      default: 'npm test',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does your project have?',
      choices: [
        "MIT",
        "Apache2.0",
        "Mozilla",
        "GPL3.0",
        "BSD3",
      ]
    },
    
  ])
  .then((answers) => {
    console.log(answers)


    // const badge = `![License: ${answers.license}](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=green)`;
    const badge = `![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-green)`;


    const readmeText = `
# < ${answers.title} >
${badge}

## Description
${answers.description}

## Table of contents
* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [License](#license)

* [Questions](#questions)

* [Screenshots](#screenshots)


## Installation

\`
${answers.installation}
\`

## Usage

${answers.usage}

## License

This project is licensed under ${answers.license} license.;

## Contributing

${answers.contributing}

## Tests

Run command to test:

\`
${answers.test}
\`


## Questions

For questions, you may reach me at ${answers.email}. 
You can check out my other work at ${answers.github}.

## Screenshots

![${answers.title} Screenshot](https://github.com/${answers.github}/??????????????.jpg)


## 🔗Link to Deployed Page URL
https://${answers.github}.github.io/????????????/

## 🔗 Link to GitHub Repo Page
https://github.com/${answers.github}/??????????  [![${answers.github} Repo Page](https://img.shields.io/github/stars/${answers.github}/??????????style=social)](https://github.com/${answers.github}/????????????)
    `

    // function to write README file
    fs.writeFile(`./${answers.title}.md`, readmeText, function() {
      console.log("File written successfully!")
    })

  })
}


// Function call to initialize app
init();
