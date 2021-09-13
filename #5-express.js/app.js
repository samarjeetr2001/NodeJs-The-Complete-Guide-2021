const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}))
// app.use('/', (req, res, next)=>{ 
//     console.log("This always run");
//     next();
// });

app.use('/add-product',(req, res, next)=>{
    console.log("In the middleware of add product ");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
});

app.use('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next)=>{
    console.log("In the middleware default last");
    res.send("<h1>Hello from Express app</h1>");
});

app.listen(3000);
