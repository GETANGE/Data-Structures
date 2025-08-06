const fsPromises = require('fs').promises;
const path = require('path');

// Replacing callback hell using Promises(Async await)
const fileOps = async () =>{
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'test.txt'), 'utf8')
        await fsPromises.writeFile(path.join(__dirname, 'files', 'test.txt'), "File handling via async/await \n")
        await fsPromises.appendFile(path.join(__dirname, 'files', 'test.txt'), "\nPromises makes one handle asynchronous tasks synchronously with an expected order of execution", (err)=>{
            if (err) throw err
        })

        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
fileOps()

// Write to a file
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "Onjwang'a", (err) =>{
//     if(err) throw err;
//     console.log("Operation completed")

//     // Update a file 
//     fs.appendFile(path.join(__dirname, 'files', 'test.txt'), "\nTesting appending file", (err) =>{
//         if(err) throw err;
//         console.log("Append completed")
//     })
// })

// // Read a file
// fs.readFile("NodeJS-Interview/files/test.txt","utf8" , (err, data) =>{
//     if(err){
//         throw err;
//     }

//     console.log(data)
//     // console.log(data.toString())
// })

process.on("uncaughtException", (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1)
})