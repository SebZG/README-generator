import fs from "fs/promises";
import path from 'path'
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";

// Array of questions for user input
const questions = [
  {
    type: "confirm",
    name: "includeTitle",
    message: "include Title?",
    default: true
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    when(answers) {
      return answers.includeTitle === true
    },
  },
  {
    type: "confirm",
    name: "includeLicense",
    message: "include license?",
    default: true
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'AGPL v3', 'MPL 2.0', 'Boost 1.0', 'none'],
    when(answers) {
      return answers.includeLicense === true
    },
  },
  {
    type: "confirm",
    name: "includeDescription",
    message: "include description?",
    default: true
  },
  {
    type: "editor",
    name: "description",
    message: "Add description of your project:",
    when(answers) {
      return answers.includeDescription === true
    },
  },
  {
    type: "confirm",
    name: "includeInstallation",
    message: "include installation guidelines?",
    default: true
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Add installation guidelines:',
    when(answers) {
      return answers.includeInstallation === true
    },
  },
  {
    type: "confirm",
    name: "includeUsage",
    message: "include usage guidelines?",
    default: true
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Add usage guidelines:',
    when(answers) {
      return answers.includeUsage === true
    },
  },
  {
    type: "confirm",
    name: "includeContribution",
    message: "include contribution guidelines?",
    default: true
  },
  {
    type: 'editor',
    name: 'contribution',
    message: 'Add contributing guidlines:',
    when(answers) {
      return answers.includeContribution === true
    },
  },
  {
    type: "confirm",
    name: "includeTest",
    message: "include test guidelines?",
    default: true
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'Add test guidelines:',
    when(answers) {
      return answers.includeTest === true
    },
  },
  {
    type: "confirm",
    name: "includeGithub",
    message: "include GitHub username?",
    default: true
  },
  {
    type: 'input',
    name: 'github',
    message: 'Add GitHub username:',
    when(answers) {
      return answers.includeGithub === true
    },
  },
  {
    type: "confirm",
    name: "includeEmail",
    message: "include E-Mail?",
    default: true
  },
  {
    type: 'input',
    name: 'email',
    message: 'Add E-Mail:',
    when(answers) {
      return answers.includeEmail === true
    },
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  const filePath = path.resolve("./demos", fileName); // Edit file path here

  fs.writeFile(filePath, data, err => {
    if (err) throw err;
  });
}

// Function to initialize program
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent); // Change file name here if needed
    console.log("Successfully generated!");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Calling init to start the application
init();
