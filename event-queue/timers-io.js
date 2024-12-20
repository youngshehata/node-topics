const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("File Read IO");
});

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

// Why the result is not consistent?
// sometimes gonna give you Timeout 1 first, sometimes gonna give you File Read IO first.
// Thats because the minimum timer resolution is 1ms ( in C++ code it takes the max of (given ms || 1ms) ).
// So, the timer will be scheduled to run after 1ms if cpu is idle most likely IO will be logged first,
// But if the cpu is busy, and took more than 1ms to start excuting so the timeout was already set in timers queue,
// then the timeout will be logged first.
