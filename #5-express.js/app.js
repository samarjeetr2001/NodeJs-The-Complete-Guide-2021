const express = require("express");
//

const app = express();

// app.use('/', (req, res, next)=>{ 
//     console.log("This always run");
//     next();
// });

app.use('/add-product',(req, res, next)=>{
    console.log("In the middleware of add product ");
    res.send("<h1>Hello from Add Product page</h1>");
});

app.use('/',(req, res, next)=>{
    console.log("In the middleware default last");
    res.send("<h1>Hello from Express app</h1>");
});

app.listen(3000);
