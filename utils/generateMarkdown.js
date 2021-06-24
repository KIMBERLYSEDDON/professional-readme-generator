
const generateMarkdown = data =>
  `
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
module.exports = generateMarkdown;
