var http=require("http");
var server=http.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
})
server.listen(3000)
