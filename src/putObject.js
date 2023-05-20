// import { spawn } from "child_process";
// import inquirer from "inquirer";

// async function putObject() {
//   const gnfd = `/Users/jin/greenfield-cmd/build/./gnfd-cmd`;

//   const bucketProc = spawn(gnfd, ["storage", "ls-bucket"], { cwd: "/Users/jin/greenfield-cmd/build" });

//   const dataPromise = new Promise((resolve, reject) => {
//     let bucketNames = [];
//     bucketProc.stdout.on("data", (data) => {
//       const lines = `${data}`.split("\n");
//       lines.forEach((line) => {
//         const match = line.match(/bucket name: (.*),/);
//         if (match) {
//           const bucketName = match[1];
//           bucketNames.push(bucketName);
//         }
//       });
//       resolve(bucketNames);
//     });

//     bucketProc.stderr.on("data", (data) => {
//       console.error(`stderr: ${data}`);
//       reject();
//     });

//     bucketProc.on("exit", (code) => {
//       console.log(`Child exited with code ${code}`);
//     });
//   });

//   try {
//     const bucketNames = await dataPromise;
//     const answers = await inquirer.prompt([
//       {
//         type: "list",
//         name: "bucket",
//         message: "Which bucket do you want to choose?",
//         choices: bucketNames,
//       },
//     ]).then((answers) => {
//         const proc = spawn(
//             gnfd,
//             [
//               "storage",
//               "put",
//               "--secondarySPs=0x169321fC04A12c16D0DaF30BBfD0c805D0223803",
//               `--contentType="text/xml"`,
//               `gnfd://${answers.bucket}/${}`,
//             ],
//             { cwd: "/Users/jin/greenfield-cmd/build" }
//           );

//           proc.stdout.on("data", (data) => {
//             console.log(`stdout: ${data}`);
//           });
//     })
//   } catch (err) {
//     console.error(`Error occurred: ${err}`);
//   }

// }

// export default putObject;
