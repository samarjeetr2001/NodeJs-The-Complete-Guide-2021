const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    // console.log("request");
    // console.log(req.url, req.method, req.headers);
    // console.log(req);
    const url = req.url;
    const method = req.method;
    if(url ==="/"){
        res.write("<html>");
        res.write("<head><title>Base page</title></head>");
        res.write("<body> <form action='/message' method = 'POST'><input type='text' name='input1'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
       return  res.end();
    }
    if(url==="/message" && method==='POST'){
       fs.writeFileSync("message.txt", "Dummy Text");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    //    res.writeHead(302, {"Location": "/"}); // this equivalant to above 2 lines
    }
    res.setHeader( "Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>First page</title></head>");
    res.write("<body><h1> hello from node application </body>");
    res.write("</html>");
    return res.end();
});

server.listen(3000);