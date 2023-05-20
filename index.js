// import AWS from "aws-sdk";
import { S3Client, ListBucketsCommand, ExistingObjectReplicationStatus } from "@aws-sdk/client-s3";
import inquirer from "inquirer";
import createBucket from "./src/createBucket.cjs";
import initChoice from "./src/initChoice.js";
import putObject from "./src/putObject.js";
import spawnGo from "./src/spawnGo.js";

initChoice();
// putObject();
