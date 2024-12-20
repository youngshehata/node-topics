const { execFile } = require("child_process");
const path = require("path");

// assuming we checking for ENV to run the logger only on production
const filePath = path.resolve(__dirname, "./production-logger.js");

execFile("node", [filePath], (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
