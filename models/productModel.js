const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this.title);
  }

  static getProducts() {
    return products;
  }

  static clearAllProducts() {
    products.length = 0;
  }
};
