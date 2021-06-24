const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require('./utils/generateMarkdown')

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for this application?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information for this application?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What command should be run to tun tests?",
    name: "tests",
  },
  {
    type: "list",
    message: "Which license should your project have?",
    name: "license",
    choices: ["MIT", "APACH-2.0", "GPL-3.0", "BSD-3", "none"],
  },
];
inquirer.prompt(questions).then((data) => {
  // TODO: Create a function to write README file
  fs.writeFile("./project/README.md", markDown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
});
