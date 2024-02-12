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

  const sections = [
    { title: "Description", content: descriptionSection },
    { title: "Installation", content: installationSection },
    { title: "Usage", content: usageSection },
    { title: "License", content: licenseSection },
    { title: "Contributing", content: contributingSection },
    { title: "Tests", content: testsSection },
    { title: "Questions", content: questionsSection }
  ];

  const tableOfContents = sections.filter(section =>
    section.content).map(section => `- [${section.title}](#${section.title.toLowerCase()})`).join('\n');

  return `
${titleSection}
${licenseBadge}
${descriptionSection}

${tableOfContents ? '## Table of Contents\n' + tableOfContents + '\n' : ''}

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
