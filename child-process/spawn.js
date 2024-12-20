const { spawn } = require("child_process");

// Use for large files because it will not load the whole file in memory, data will be streamed (chunk by chunk)

const spawnChild = spawn("node", ["./heavy.js"]);

spawnChild.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

spawnChild.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

spawnChild.on("error", (error) => {
  console.error(`error: ${error.message}`);
});

spawnChild.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
