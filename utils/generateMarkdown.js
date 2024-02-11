// function to generate markdown for README
export function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, github, email } = data;

  const setLicense = (license) => {
    let licenseBadge = '';
    let licenseNotice = '';

    if (license === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      licenseNotice = 'This application is covered under the MIT License.';
    }
    else if (license === 'Apache 2.0') {
      licenseBadge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      licenseNotice = 'This application is covered under the Apache 2.0 License.';
    }
    else if (license === "GPL v3") {
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      licenseNotice = 'This application is covered under the GNU GPL v3 License.';
    }
    else if (license === "AGPL v3") {
      licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      licenseNotice = 'This application is covered under the GNU AGPL v3 License.';
    }
    else if (license === "MPL 2.0") {
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      licenseNotice = 'This application is covered under the Mozilla Public License 2.0.';
    }
    else if (license === "Boost 1.0") {
      licenseBadge = '[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      licenseNotice = 'This application is covered under the Boost Software License 1.0.';
    }

    return { badge: licenseBadge, notice: licenseNotice }
  }

  let titleSection = title ? `# ${title}\n` : "";
  let descriptionSection = description ? `## Description\n${description}\n` : "";
  let installationSection = installation ? `## Installation\n${installation}\n` : "";
  let usageSection = usage ? `## Usage\n${usage}\n` : "";
  let { badge: licenseBadge, notice: licenseNotice } = setLicense(license);
  let licenseSection = licenseBadge ? `## License\n${licenseNotice}\n` : "";
  let contributingSection = contributing ? `## Contributing\n${contributing}\n` : "";
  let testsSection = tests ? `## Tests\n${tests}\n` : "";
  let gitHub = github ? `Visit my [GitHub](https://github.com/${github}) profile\n` : "";
  let eMail = email ? `Feel free to [E-Mail](mailto:${email}) me\n` : "";

  return `
  ${titleSection}
  ${licenseBadge}
  ${descriptionSection}
  
  ${descriptionSection ||
      installationSection ||
      usageSection ||
      licenseSection ||
      contributingSection ||
      testsSection ||
      questionsSection ? '## Table of Contents' : ""}
  ${descriptionSection ? '- [Description](#description)\n' : ''}
  ${installationSection ? '- [Installation](#installation)\n' : ''}
  ${usageSection ? '- [Usage](#usage)\n' : ''}
  ${licenseSection ? '- [License](#license)\n' : ''}
  ${contributingSection ? '- [Contributing](#contributing)\n' : ''}
  ${testsSection ? '- [Tests](#tests)\n' : ''}
  ${gitHub || eMail ? '- [Questions](#questions)\n' : ''}
  
  ${installationSection}
  ${usageSection}
  ${licenseSection}
  ${contributingSection}
  ${testsSection}
  ${gitHub || eMail ? '## Questions\n' : ""}
  ${gitHub}
  ${eMail}
`;
}