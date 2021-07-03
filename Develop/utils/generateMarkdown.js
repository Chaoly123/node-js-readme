// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function buildHeader(text) {
  return `
  ## ${text}`
}

function renderTableOfContentsItem(title) {
  return `
* [${title}](#${title.toLowerCase()})`
}

function generateMarkdown(data) {


  var licenseSection = "";

  if (data.license == "MIT") {
    licenseSection = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (data.license == "Eclipse") {
    licenseSection = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  else if (data.license == "IMB") {
    licenseSection = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  // WHEN I enter a description, installation instructions, 
  // usage information, contribution guidelines, and test instructions
  return `# ${data.name}

## Description
Here is some of the ${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## Email
${data.email}

## License 
This license is under the ${licenseSection}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ylchaos123@gmail.com. You can find more of my work at [chaoly123](https://github.com/chaoly123/).
`;
}

module.exports = generateMarkdown;
