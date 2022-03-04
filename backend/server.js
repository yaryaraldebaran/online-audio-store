const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
var router = require ('./route/route')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api', router)


app.listen(4000, ()=>{
    console.log("app listening on port 4000");
})