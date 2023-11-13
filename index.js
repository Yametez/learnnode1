const http = require('http')

http.createServer((req,res)=>{
    res.write("<h1>Hello Yamete</h1>")
    res.end()
}).listen(8080,()=>{
    console.log("start server in port 8080")
})
