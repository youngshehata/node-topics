setTimeout(() => {
  console.log("Timeout 1");
}, 10);

setTimeout(() => {
  console.log("Timeout 2");
  process.nextTick(() => {
    console.log("Next Tick 1");
  });
}, 10);

setTimeout(() => {
  console.log("Timeout 3");
}, 10);
