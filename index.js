// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// function to initialize app
function init() {
  inquirer
    .prompt([
      // array of questions for user input
      {
        type: "input",
        name: "title",
        message: "Give a Title to your Project?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "description",
        message: "Give a simple description of your Project?",
      },
      {
        type: "input",
        name: "installation",
        message: "Code to install required NPM?",
        default: "npm i inquirer@8.2.4",
      },
      {
        type: "input",
        name: "usage",
        message: "Give a brief usage information of your Project?",
      },
      {
        type: "input",
        name: "test",
        message: "Code to test your Project?",
        default: "npm test",
      },
      {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "Apache2.0", "Mozilla", "GPL3.0", "BSD3"],
      },
    ])
    .then((answers) => {
      console.log(answers);

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


## Installation

\`
${answers.installation}
\`

## Usage

${answers.usage}

## License

This project is licensed under ${answers.license} license.

## Contributing

If you want to contribute, feel free to email me at ${answers.email}.

## Tests

Run command to test:

\`
${answers.test}
\`


## Questions

For questions, bugs or issues, you may reach me at ${answers.email}. 
You can check out my other work at ${answers.github}.


## 🔗 Link to GitHub Repo Page
https://github.com/${answers.github}/${answers.title}  [![${answers.github} Repo Page]
`;

      // function to write README file
      fs.writeFile(`README.md`, readmeText, function () {
        console.log("README File written successfully!");
      });
    });
}

// Function call to initialize app
init();
