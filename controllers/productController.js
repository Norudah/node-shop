const Product = require("../models/productModel");

exports.list = (req, res, next) => {
  Product.getProducts((products) => {
    res.render("products/list", { products: products });
  });
};

exports.addNewProduct = (req, res, next) => {
  res.render("products/addProduct");
};

exports.postAddNewProduct = (req, res, next) => {
  const product = new Product(req.body.newProduct);
  product.save();
  res.redirect("/products");
};
