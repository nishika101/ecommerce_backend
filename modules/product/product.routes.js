// importing dependencies
const express = require('express');
const router = express.Router();
// importing controller
const productController = require("./product.controller");

// route for adding product
router.post("/add-product",productController.addProduct);

//exporting the router
module.exports =  router;