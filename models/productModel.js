const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../", "data/", "data.json");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // Get potentials data before adding a new one
    fs.readFile(p, (error, fileData) => {
      let data = [];
      if (!error) {
        data = JSON.parse(fileData);
      }

      // Add new data
      data.push(this.title);
      data = JSON.stringify(data);

      // Add new data
      fs.writeFile(p, data, (error) => {
        if (error) return data;
        console.log("write file successful");
      });
    });
  }

  static getProducts(callback) {
    fs.readFile(p, (error, fileData) => {
      if (!error) return callback(JSON.parse(fileData));
      callback([]);
    });
  }

  static clearAllProducts() {
    products.length = 0;
  }
};
