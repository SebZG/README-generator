export const questions = [
  {
    type: "confirm",
    name: "includeTitle",
    message: "include Title?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    when(answers) {
      return answers.includeTitle === true;
    },
    validate(input) {
      return input.trim() !== '' ? true : 'Please enter a title for your project';
    }
  },
  {
    type: "confirm",
    name: "includeLicense",
    message: "include license?",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'AGPL v3', 'MPL 2.0', 'Boost 1.0', 'none'],
    when(answers) {
      return answers.includeLicense === true;
    },
  },
  {
    type: "confirm",
    name: "includeDescription",
    message: "include description?",
  },
  {
    type: "editor",
    name: "description",
    message: "Add description of your project:",
    when(answers) {
      return answers.includeDescription === true;
    },
    validate(input) {
      return input.trim() !== '' ? true : 'Please enter a description for your project';
    }
  },
  {
    type: "confirm",
    name: "includeInstallation",
    message: "include installation guidelines?",
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Add installation guidelines:',
    when(answers) {
      return answers.includeInstallation === true;
    },
    validate(input) {
      return input.trim() !== '' ? true : 'Please enter an installation guide for your project';
    }
  },
  {
    type: "confirm",
    name: "includeUsage",
    message: "include usage guidelines?",
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Add usage guidelines:',
    when(answers) {
      return answers.includeUsage === true;
    },
    validate(input) {
      return input.trim() !== '' ? true : 'Please enter a usage guide for your project';
    }
  },
  {
    type: "confirm",
    name: "includeContribution",
    message: "include contribution guidelines?",
  },
  {
    type: 'editor',
    name: 'contribution',
    message: 'Add contributing guidlines:',
    when(answers) {
      return answers.includeContribution === true;
    },
    validate(input) {
      return input.trim() !== '' ? true : 'Please enter a contribution guide for your project';
    }
  },
  {
    type: "confirm",
    name: "includeTest",
    message: "include test guidelines?",
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'Add test guidelines:',
    when(answers) {
      return answers.includeTest === true;
    },
    validate(input) {
      return input.trim() !== '' ? true : 'Please enter a tests guide for your project';
    }
  },
  {
    type: "confirm",
    name: "includeGithub",
    message: "include GitHub username?",
  },
  {
    type: 'input',
    name: 'github',
    message: 'Add GitHub username:',
    when(answers) {
      return answers.includeGithub === true;
    },
    validate(input) {
      const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
      return githubUsernameRegex.test(input) ? true : 'Please enter a valid GitHub username';
    },
  },
  {
    type: "confirm",
    name: "includeEmail",
    message: "include E-Mail?",
  },
  {
    type: 'input',
    name: 'email',
    message: 'Add E-Mail:',
    when(answers) {
      return answers.includeEmail === true;
    },
    validate(input) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input) ? true : 'Please enter a valid email address';
    },
  }
];
