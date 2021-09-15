const express = require("express");

const router = express.Router();


router.get('/',(req, res, next)=>{
    console.log("In the middleware default last");
    res.send("<h1>Hello from Express app</h1>");
});

module.exports = router;