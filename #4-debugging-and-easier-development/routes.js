const fs = require("fs");
 
const requestHandler = (req, res)=>{

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
        const body = [];
        req.on("data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
    return   req.on("end", ()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            fs.writeFile("message.txt",message, (error)=>{
                console.log(error);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader( "Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>First page</title></head>");
    res.write("<body><h1> hello from node application </body>");
    res.write("</html>");
    return res.end();
};

exports.handler = requestHandler;
exports.someText = 'some hard coded text';