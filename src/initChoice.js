import inquirer from "inquirer";
import accounts from "./accounts.js";
import gfChoice from "./gfChoice.js";
import greenField from "./createBucket.cjs";
import regionQuestions from "./regionQuestions.js";

function initChoice() {
  const initChoices = ["AWS S3", "GreenField", "exit"];

  let questions = [
    {
      type: "list",
      name: "choice",
      message: "Please select your work:",
      choices: initChoices,
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    switch (answers.choice) {
      case "AWS S3":
        regionQuestions();
        break;
      case "GreenField":
        gfChoice();
        break;
      case "exit":
        console.log("Process Terminated");
        break;
    }
  });
}

export default initChoice;
