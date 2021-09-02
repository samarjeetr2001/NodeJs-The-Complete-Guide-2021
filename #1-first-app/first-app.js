const fs = require("fs");
// require() = is used to import modules 
// we have stored tat import in a constant 'fs' which is FILE-SYSTEM object
console.log("Write Started");

fs.writeFileSync('hello.txt', 'Hello From NodeJS');
// writeFileSync(param1 param2) = is method of FILE-SYSTEM object used to write a file it take two 
//parameter param1 = path including file name & param2 = content of that file
console.log("Write Completed");