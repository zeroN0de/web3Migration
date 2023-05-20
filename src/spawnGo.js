import { spawn } from "child_process";
import inquirer from "inquirer";

function spawnGo() {
  const gnfd = `/Users/jin/greenfield-cmd/build/./gnfd-cmd`;
  inquirer
    .prompt([{ name: "name", type: "input", message: "Bucket Name :" }])
    .then((answers) => {
      const proc = spawn(
        gnfd,
        [
          "storage",
          "make-bucket",

          "--primarySP=0x02Ad74D9B2349c2f0B1e9598aB018B3414dDe87A",
          "--paymentAddress=0x58725054969Ef50A696e654621d378948CD64a30",
          `gnfd://${answers.name}`,
        ],
        { cwd: "/Users/jin/greenfield-cmd/build" }
      );

      proc.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
      });
      proc.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
      });
      proc.on("exit", (code) => {
        console.log(`Child exited with code ${code}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export default spawnGo;
