const express = require("express");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.use(express.urlencoded({extended: false}))

app.use(adminRoute);
app.use(shopRoute);
app.use((req, res, next)=>{
    res.status(404).send('<h1> Page not gound </h1>');
});

app.listen(3000);
