import { setLicense } from "./setLicense.js";

export const generateMarkdown = (data) => {
  const { title, description, installation, usage, license, contribution, tests, github, email } = data;

  const titleSection = title ? `# ${title}\n` : "";
  const descriptionSection = description ? `## Description\n${description}\n` : "";
  const installationSection = installation ? `## Installation\n${installation}\n` : "";
  const usageSection = usage ? `## Usage\n${usage}\n` : "";
  const { badge: licenseBadge, notice: licenseNotice } = setLicense(license);
  const licenseSection = licenseBadge ? `## License\n${licenseNotice}\n` : "";
  const contributingSection = contribution ? `## Contributing\n${contribution}\n` : "";
  const testsSection = tests ? `## Tests\n${tests}\n` : "";
  const questionsSection = github || email ? '## Questions\n' : ""
  const gitHub = github ? `Visit my [GitHub](https://github.com/${github}) profile\n` : "";
  const eMail = email ? `Feel free to [E-Mail](mailto:${email}) me\n` : "";

  const setTableOfContents = () => {
    return descriptionSection
      || installationSection
      || usageSection
      || licenseSection
      || contributingSection
      || testsSection
      || gitHub
      || eMail ? '## Table of Contents' : ""
  }

  return `
${titleSection}
${licenseBadge}
${descriptionSection}

${setTableOfContents()}
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
${questionsSection}
${gitHub}
${eMail}
`;
}