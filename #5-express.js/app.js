const http = require("http");
//
const express = require("express");
//

const app = express();

app.use((req, res, next)=>{
    console.log("In the middleware");
    next();
});

app.use((req, res, next)=>{
    console.log("In another the middleware");
    res.send("<h1>Hello from Express app</h1>");
});

app.listen(3000);
