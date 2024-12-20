const { fork } = require("child_process");
const path = require("path");

const filePath = path.resolve(__dirname, "./forkFile.js");

const forkedChild = fork(filePath);

forkedChild.on("message", (message) => {
  console.log(`Message from child: ${message}`);
});

forkedChild.send("Hello from parent!");
