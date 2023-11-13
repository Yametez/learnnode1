const http = require('http')

const server = http.createServer((req,res)=>{
    const myhtml=`
    <h1>Hello Yamete.js</h1>
    <p style="background:green">loungza | 2023</p>
    `

    res.write(myhtml)
    res.end()
})
server.listen(8080,'localhost',()=>{
    console.log("start server in port 8080")
})
