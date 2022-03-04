const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:"localhost",
    user:"ahyar",
    password:"Shanpark203_",
    database:"audio-store"
});

conn.connect((err)=>{
    if(err){console.log(err);}
    console.log("connected to db");
})

module.exports=conn;