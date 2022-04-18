//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license != 'None') {
    licenseBadge = '![License Badge](https://shields.io/badge/license-' + license + '-blueviolet)'
  }

  return licenseBadge;
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  switch(license) {
    case 'Apache':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost':
      licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
      break; 
    case 'Eclipse':
      licenseLink = 'https://opensource.org/licenses/EPL-1.0';
      break; 
    case 'IBM':
      licenseLink = 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
      break;
    default:
      licenseLink = '';
  }

  return licenseLink;
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license != 'None') {
    licenseSection += renderLicenseBadge(license) + renderLicenseLink(license)
  }

  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)<br />
This application is covered by the ${data.license} license. 
## Contributors
${data.contributions}
## Tests
${data.test}
## Questions
Find me on GitHub: [${data.username}](https://github.com/${data.username})

Email me with any questions: ${data.email}
`;
}


module.exports = generateMarkdown;
