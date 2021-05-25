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
  const id = req.params.productId;
  Product.getProductById(id, (product) => {
    if (typeof product === "undefined") res.status(404).redirect("/404");
    res.render("products/edit", { product: product, id: id });
  });
};

// TODO
exports.postEdit = (req, res, next) => {
  const id = req.params.productId;
  const product = new Product(
    req.body.productName,
    req.body.productDescription,
    req.body.productPrice,
    req.body.productUrl
  );
  Product.editById(id, product, () => {
    res.redirect("/products");
  });
};

exports.detail = (req, res, next) => {
  const id = req.params.productId;
  Product.getProductById(id, (product) => {
    if (typeof product === "undefined") res.status(404).redirect("/404");
    res.render("products/detail", { product: product });
  });
};

exports.postDelete = (req, res, next) => {
  const id = req.params.productId;
  Product.deleteById(id, () => {
    res.redirect("/products");
  });
};
