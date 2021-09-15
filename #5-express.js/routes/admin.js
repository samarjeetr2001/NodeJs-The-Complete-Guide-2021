const path = require('path')
const express = require("express");

const rootDir = require('../util/path')

const router = express.Router();

// app.use('/', (req, res, next)=>{ 
//     console.log("This always run");
//     next();
// });
//! /admin/add-product
router.get('/add-product', (req, res, next) => {
    console.log("In the middleware of add product ");
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//! /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
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

//! /admin/product
router.post('/product', (req, res, next) => {
    console.log("product post function");
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;