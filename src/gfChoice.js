import inquirer from "inquirer";
import accounts from "./accounts.js";
import initChoice from "./initChoice.js";
import spawnGo from "./spawnGo.js";

function gfChoice() {
  const gfChoices = ["Create Account", "Create Bucket", "Upload Obj", "Back"];

  let questions = [
    {
      type: "list",
      name: "gfChoices",
      message: "Please select work for GreenField",
      choices: gfChoices,
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    switch (answers.gfChoices) {
      case "Create Account":
        accounts();
        break;
      case "Create Bucket":
        spawnGo();

        break;
      case "Upload Obj":
        console.log("This is still before implementation.");
        gfChoice();
        break;
      case "Back":
        initChoice();
    }
  });
}
export default gfChoice;
