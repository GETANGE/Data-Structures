// PHASE 1: Timers (setTimouts & setIntervals callbacks)
// This phase executes callbacks scheduled using "setTimeout()" and "setInterval()"
// The execution order depends on when the timer expires
// They are not guaranteed to execute precisely after the specified time due to event loop delays
setTimeout(()=> console.log(`Timeout callback`), 0);
console.log(`Synchronouse code`)

// Even though setTimeout is 0ms, it runs after "synchronous code" because the event loop must first complete the current executions


// PHASE 2: I/O Callbacks
// Executes callback from I/O operations like file system reads ( fs.readFile(), network requests (http.get()), and database queries)

const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data)=>{
    console.log(`File Read Complete`)
})

console.log("Reading File...")

// PHASE 3: Idle, prepare(Internal Use)
// Used to internal optimization in libuv

// PHASE 4: Poll Phase(Handles I/O & Determines Next phase)
// If there are pending I/O callbacks, they will be executed
// If there are no pending timers, the event loop will wait for new I/O events
// If there is nothing to process, it moves to the check phase

setImmediate(() => console.log("setImmediate Callback"));
setTimeout(() => console.log("setTimeout Callback"), 0);

// PHASE 5: Check Phase(setImmediate Callbacks)
// setImmediate() callbacks are executed in this phase This always executes after the poll phase (if there's no blocking I/O)

setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
console.log("Synchronous Code_2");

// PHASE 6: Close Callbacks
// Handles resources that need finalization.

// MICROTASKS: process.nextTick() & Promise Callbacks
// Apart from the six phases, there are "microtasks", which are "higher priority" and execute "before the next phase begins"

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));

process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));

console.log("End");