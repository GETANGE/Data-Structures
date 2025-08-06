// PROMISES
// Promise -> This is a javascript object used for performing asynchronous operatons
// Promises allows you to write code that continues after a spacific events occur without blocking the execution of other code.

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const randomNumber = Math.random();
        if(randomNumber < 0.5){
            resolve("Data has been successfully retrived")
        }else{
            reject("An error occured while fetching data")
        }
    }, 1000)
}).then((data)=>{
    console.log(data)
}).then(()=>{
    console.log(`This is called Promise chaining`)
}).catch((error)=>{
    console.error(error)
})

// PROMISE.ALL([])
// You can use the "Promise.all()" method to check if all parallel asynchronous operations have been completed.
// When all promise operations in the array resolve, all the data in the arrays are successfully returned
// If any of the promise in the array is rejected, the result of the "Promise.all([])" will be also rejected.

const promise_1 = Promise.resolve(123);
const promise_2 = 456;
const promise_3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'foo')
})

Promise.all([promise_1, promise_2, promise_3]).then((values) => {
    console.log(values)
})


// PROMISE.RACE()
// The "Promise.race()" as specified, is the process of racing the promises within an array
// The value of the first completed promise becomes valid
// Whether the result is resolved or rejected doesn't matter; the result of the first completed promise is returned.
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, 'one')
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'two')
})

Promise.race([promise1, promise2]).then((values)=>{
    console.log(values) // will print "two"
})