const fs = require("fs");
 
const requestHandler = (req, res)=>{
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
        const body = [];
        // listen lchucks coming in request
        req.on("data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
    return   req.on("end", ()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            // fs.writeFileSync("message.txt",message);
            fs.writeFile("message.txt",message, (error)=>{
                console.log(error);
                res.statusCode = 302;
                res.setHeader('Location', '/');// redirecting request
                return res.end();
            });
            // res.statusCode = 302;
            // res.setHeader('Location', '/');// redirecting request
            // return res.end();
    //    res.writeHead(302, {"Location": "/"}); // this equivalant to above 2 lines
        });
    }
    res.setHeader( "Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>First page</title></head>");
    res.write("<body><h1> hello from node application </body>");
    res.write("</html>");
    return res.end();
};

// module.exports = requestHandler;
// module.exports= {
//     handler : requestHandler,
//     someText : 'some hard coded text',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

exports.handler = requestHandler;
exports.someText = 'some hard coded text';