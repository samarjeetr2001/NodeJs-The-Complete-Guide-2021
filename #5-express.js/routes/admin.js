const express = require("express");

const router = express.Router();

// app.use('/', (req, res, next)=>{ 
//     console.log("This always run");
//     next();
// });

router.use('/add-product',(req, res, next)=>{
    console.log("In the middleware of add product ");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
});

// app.use('/product',(req, res, next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

// app.get('/product',(req, res, next)=>{
//     console.log(req.body);
//     console.log("product get function");
// });
// similarly we have for delte, update, add


router.post('/product',(req, res, next)=>{
    console.log("product post function");
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;