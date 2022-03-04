const db = require('../koneksi');

const Order = require('../models/Order');
module.exports.getData = (req,res,next)=>{
    var sql = "SELECT * FROM products";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}

module.exports.getDataByCategory = async (req,res,next)=>{
    var category = await req.params;
    var cat = category.category;
    var sql = 'SELECT * FROM products WHERE category = ?';
    db.query(sql,cat,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
    
}

module.exports.getCategories = (req,res,next)=>{
    var sql = "SELECT DISTINCT(category) FROM products";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
}


module.exports.TambahProduk = (req,res,next)=>{
    res.send("this is for adding products")
}

module.exports.getTransactions = (req,res,next)=>{
    res.send("this is to get transactions");
}

module.exports.createOrderSequelize = (req,res,next)=>{
    // if (!req.body.name) {
    //     res.status(400).send({
    //     message: "Content can not be empty!"
    // });
    // return;
    // }
    
  // Create a student
  const order = {
    orderNumber: req.body.orderNumber,
    productID: req.body.productID,
    quantityOrdered:req.body.quantityOrdered,
    priceEach:req.body.priceEach,
    customerNumber:req.body.customerNumber
  };

  // Save student in the database
  Order.create(order)
    .then(data => {
      res.send(data);
      console.log("posted by sequelize");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Student."
      });
    });
}