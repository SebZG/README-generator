import fs from "fs/promises";
import path from 'path'
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project"
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  const filePath = path.resolve("./demos", fileName); // Construct the file path here
  fs.writeFile(filePath, data, err => {
    if (err) {
      throw err;
    }
    console.log("README.md has been successfully generated at:", filePath);
  });
}

// Function to initialize program
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent); // Change file name here if needed
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Calling init to start the application
init();