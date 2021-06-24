// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-success)
  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  This application is covered under the ${data.license} license.

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  GitHub: 
  [${data.username}](https://github.com/${data.username})
  Email: 
  ${data.email}

`;
}

module.exports = generateMarkdown;
