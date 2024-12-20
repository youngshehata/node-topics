process.on("message", (message) => {
  console.log(`Message from parent: ${message}`);
});

let counter = 0;
setInterval(() => {
  process.send(`Child process ${process.pid} says: ${counter++}`);
}, 1000);
