import { S3Client, ListBucketsCommand, BucketAccelerateStatus } from "@aws-sdk/client-s3";
import inquirer from "inquirer";
import downloadObject from "./downloadObject.js";
import getBucket from "./getBucket.js";

import regionQuestions from "./regionQuestions.js";

async function bucketQuestions(selectedRegion) {
  const s3client = new S3Client({ region: selectedRegion });

  let buckets = [];
  try {
    const data = await s3client.send(new ListBucketsCommand({}));
    buckets = data.Buckets.map((bucket) => bucket.Name);
  } catch (err) {
    console.log(err);
  }

  const bucketQuestion = [
    {
      type: "list",
      name: "bucket",
      message: "Please select your AWS Bucket : ",
      choices: [...buckets, "Go Back"],
    },
  ];
  inquirer.prompt(bucketQuestion).then((answers) => {
    if (answers.bucket === "Go Back") {
      console.log("go Back");
      regionQuestions();
    } else {
      downloadObject(answers.bucket, selectedRegion);
    }
  });
}
export default bucketQuestions;
