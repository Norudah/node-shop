const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");

// route : /products

router.get("/", productController.list);

router.get("/new", productController.addNewProduct);

router.post("/new", productController.postAddNewProduct);

router.get("/clear", productController.clear);

router.get("/edit/:productId", productController.edit);

router.post("/edit/:productId", productController.postEdit);

router.get("/detail/:productId", productController.detail);

router.post("/delete/:productId", productController.postDelete);

module.exports = router;
