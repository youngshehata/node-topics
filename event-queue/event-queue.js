console.log("One");

Promise.resolve().then(() => {
  console.log("Promise 1");
});

process.nextTick(() => {
  console.log("Next Tick 1");
  process.nextTick(() => {
    console.log("Next Tick 2");
  });
});

console.log("Two");

Promise.resolve().then(() => {
  console.log("Promise 2");
  process.nextTick(() => {
    console.log("Next Tick 3 (inside promise)");
    Promise.resolve().then(() => {
      console.log("Promise 5");
    });
  });
});

Promise.resolve().then(() => {
  console.log("Promise 3");
});

Promise.resolve().then(() => {
  console.log("Promise 4");
});
