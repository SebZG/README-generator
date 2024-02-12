import fs from "fs/promises";
import path from 'path'
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { questions } from "./utils/questions.js";

// Function to write README file
function writeToFile(fileName, data) {
  const filePath = path.resolve("./generated-readme", fileName); // Edit file path here

  fs.writeFile(filePath, data, err => {
    if (err) throw err;
  });
}

// Function to initialize program
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent); // Edit file name here
    console.log("Successfully generated!");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Calling init to start the application
init();
