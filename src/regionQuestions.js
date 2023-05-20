import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
import inquirer from "inquirer";
import bucketQuestions from "./bucketQuestions.js";

import initChoice from "./initChoice.js";

function regionQuestions() {
  const awsRegions = ["ap-northeast-2", "us-east-1", "us-east-2"];
  const regionQuestion = [
    {
      type: "list",
      name: "region",
      message: "Please select your AWS region:",
      choices: [...awsRegions, "Go Back"],
    },
  ];

  inquirer.prompt(regionQuestion).then((answers) => {
    if (answers.region === "Go Back") {
      initChoice();
    } else {
      const s3client = new S3Client({ region: answers["region"] });
      bucketQuestions(answers["region"]);
    }
  });
}
export default regionQuestions;
