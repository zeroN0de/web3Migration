import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

async function getBucket(selectedRegion) {
  const s3client = new S3Client({ region: selectedRegion });
  try {
    const data = await s3client.send(new ListBucketsCommand({}));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
export default getBucket;
