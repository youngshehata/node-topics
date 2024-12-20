const fs = require("fs");

const r = fs.createReadStream(__filename);
const r2 = fs.createReadStream(__filename);
r.close();

r2.on("close", () => {
  console.log("File Read 2 Stream Closed");
});

r.on("close", () => {
  console.log("File Read Stream Closed");
  r2.close();
  process.nextTick(() => {
    console.log("Next Tick 1");
  });
});
