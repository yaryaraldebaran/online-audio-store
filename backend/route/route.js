const express = require('express');
const { getData, TambahProduk, getTransactions, getCategories, getDataByCategory, createOrderSequelize } = require('../controller/controller');
const router = express.Router();


router.get('/products',getData);
router.get('/productByCategory/:category', getDataByCategory)
router.get('/getCategories',getCategories)
router.post('/',TambahProduk);
router.post('/createOrder', createOrderSequelize);



module.exports = router;