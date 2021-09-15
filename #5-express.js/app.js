const path = require('path');
const express = require("express");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.use(express.urlencoded({extended: false}))

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);
