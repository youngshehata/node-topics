const { exec } = require("child_process");
exec("ls ../", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(
    `the list of files and folder of the parent folder (../) are: ${stdout}`
  );
  console.error(`stderr: ${stderr}`);
});
