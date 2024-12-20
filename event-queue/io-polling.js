const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("File Read IO");
});

fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
  console.log("Fetch IO");
});

process.nextTick(() => {
  console.log("Next Tick 1");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setImmediate(() => {
  console.log("Immediate 1");
  setTimeout(() => {
    console.log("Timeout Inside");
  }, 0);
});

const r = fs.createReadStream(__filename);
r.close();

r.on("close", () => {
  console.log("File Read Stream Closed");
});

for (let i = 0; i < 2000000000; i++) {} // to make sure timers CBs are queued
