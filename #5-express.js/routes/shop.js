const path = require('path')
const express = require("express");

const rootDir = require('../util/path')


const router = express.Router();


router.get('/', (req, res, next) => {
    // console.log("In the middleware default last");
    // res.send("<h1>Hello from Express app</h1>");
    // res.sendFile('../views/shop.html'); // this will not work due to relative path and /
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;