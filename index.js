var express = require("express")
var app = express()
var num = 1
app.get('/', (req, res) => {
    console.log(`hello, QA${num}`)
    num++
    res.send("hello,QA");

    
});


app.listen(3002, () => { 
    console.log("3001 port open!!!");
});

