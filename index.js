const { isUtf8 } = require('buffer');
const express = require('express');
const app = express();
const port = 8181
const fs = require('fs')

const userRoute = require ("./userRoute")
const productRoute = require ("./productRoute")
const userService = require("./serviceRoute")

const home = fs.readFileSync('./pages/index.html', "utf-8")

app.get('/', (req, res) =>{
        res.end(home)
})  

//using product route 
app.use(userRoute)
app.use(productRoute)
app.use(userService)
//server will now handle json data
app.use(express.json())

app.listen(port, () => {
    console.log(`server started succesfully. click http://localhost:${port} 
    to open website`)
})
