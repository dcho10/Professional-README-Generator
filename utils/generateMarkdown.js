// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!renderLicenseSection) {
    return ""
  } else if (license === "Apache") {
    return "\n[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)](https://opensource.org/license/apache-2-0)"
  } else if (license === "BSD") {
    return "\n[![License: BSD](https://img.shields.io/badge/License-BSD-pink.svg)](https://opensource.org/license/bsd-3-clause)"
  } else if (license === "CDDL") {
    return "\n[!License: CDDL](https://img.shields.io/badge/License-CDDL-brown.svg)(https://opensource.org/license/cddl-1-0)"
  } else if (license === "Eclipse") {
    return "\n[!License: Eclipse](https://img.shields.io/badge/License-Eclipse-orange.svg)](https://opensource.org/license/epl-2-0)"
  } else if (license === "GNU") {
    return "\n[![License: GNU](https://img.shields.io/badge/License-GNU-green.svg)](https://opensource.org/license/lgpl-3-0)"
  } else if (license === "MIT") {
    return "\n[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Mozilla") {
    return "\n[![License: Mozilla](https://img.shields.io/badge/License-Mozilla-red.svg)](https://opensource.org/license/mpl-2-0)"
  }
};

// licenses from: https://opensource.org/licenses?categories=popular-strong-community

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!renderLicenseSection) {
    return ""
  } else {
    return `\nThis project uses the ${license} license.`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "" || license === "none" || license === "None") {
    return ""
  } else {
    return `\n## License`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

https://github.com/${data.username}/${data.title}

## Description

  The purpose of my app is ${data.functionality}
  \nThe app is intended for ${data.intention}
  \nThe reason I created the app is because ${data.creation}
  \nSome vicotries I experienced include ${data.victories}
  \nSome challenges I experienced include ${data.challenges}
  
## Table of Contents

  [Installation](#installation)
  
  [Usage](#usage)

  [Credits](#credits)
  
  [Frequently Asked Questions (FAQ)](#FAQ)
  
  [Contribution](#contribution)
  
  [Tests](#tests)

  [License](#license)
    
## Installation

  ${data.installation}

## Usage

  ${data.usage}

## Credits

  ${data.credits}

## Frequently Asked Questions (FAQ)

  ${data.questions}

## Contribution

  ${data.contribution}

## Tests
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

To visit my other work, you can find me at:
${data.username}
To contact me, you can contact me at: ${data.email}
`
}

module.exports = generateMarkdown;
