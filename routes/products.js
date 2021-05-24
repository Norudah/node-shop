const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");

// route : /products

router.get("/", productController.list);

router.get("/new", productController.addNewProduct);

router.post("/new", productController.postAddNewProduct);

router.get("/clear", productController.clear);

router.get("/edit", productController.edit);

router.get("/detail", productController.detail);

module.exports = router;
