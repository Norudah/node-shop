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
  const product = new Product(
    req.body.productName,
    req.body.productDescription,
    req.body.productPrice,
    req.body.productUrl
  );
  product.save();
  res.redirect("/products/new");
};

exports.clear = (req, res, next) => {
  Product.clearAll();
  res.redirect("/products");
};

exports.edit = (req, res, next) => {
  Product.getProductById(0, (product) => {
    res.render("products/edit", { product: product });
  });
};

exports.detail = (req, res, next) => {
  Product.getProductById(0, (product) => {
    res.render("products/detail", { product: product });
  });
};
