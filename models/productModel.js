const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    console.log("before :" + products);
    products.push(this.title);
    console.log("after :" + products);
  }

  static getProducts() {
    console.log("getProducts : " + products);
    return products;
  }

  static clearAllProducts() {
    products.length = 0;
  }
};
