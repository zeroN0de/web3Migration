import { S3Client, ListObjectsCommand, GetObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import os from "os";
import ProgressBar from "progress";
import initChoice from "./initChoice.js";

async function downloadObject(answers, selectedRegion) {
  const s3client = new S3Client({ region: selectedRegion });

  const data = await s3client.send(new ListObjectsCommand({ Bucket: answers }));

  let totalSize = 0;
  for (let content of data.Contents) {
    const headObjectResult = await s3client.send(new HeadObjectCommand({ Bucket: answers, Key: content.Key }));
    totalSize += headObjectResult.ContentLength;
  }

  const bar = new ProgressBar(`${answers} download [:bar] :percent :etas`, {
    complete: "=",
    incomplete: " ",
    width: 20,
    total: totalSize,
  });

  const getObject = async () => {
    for (let content of data.Contents) {
      const res = await s3client.send(new GetObjectCommand({ Bucket: answers, Key: content.Key }));

      const dir = path.join(os.homedir(), `.aws/downloads/${answers}`, path.dirname(content.Key));

      fs.mkdirSync(dir, { recursive: true });

      const writableStream = fs.createWriteStream(path.join(dir, path.basename(content.Key)));

      await new Promise((resolve, reject) => {
        res.Body.pipe(writableStream);

        res.Body.on("data", (chunk) => {
          // Update the progress bar
          bar.tick(chunk.length);
        });

        res.Body.on("end", resolve);
        res.Body.on("error", reject);
      });
    }
  };
  await getObject();
  initChoice();
}

export default downloadObject;
