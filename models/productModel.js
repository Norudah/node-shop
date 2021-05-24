const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../", "data/", "data.json");

module.exports = class Product {
  constructor(title, description, price, url) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.url = url;
  }

  save() {
    // Get potentials data before adding a new one
    fs.readFile(p, (error, fileData) => {
      let data = [];
      if (!error) {
        data = JSON.parse(fileData);

        // Add new data
        data.push(this);
        data = JSON.stringify(data);

        // Add new data
        fs.writeFile(p, data, (error) => {
          if (error) return data;
          console.log("Write file successful");
        });
      }
    });
  }

  static getProductById(id, callback) {
    fs.readFile(p, (error, fileData) => {
      if (!error) {
        const product = JSON.parse(fileData)[id];
        callback(product);
      }
    });
  }

  static getProducts(callback) {
    fs.readFile(p, (error, fileData) => {
      if (!error) return callback(JSON.parse(fileData));
      callback([]);
    });
  }

  static clearAll() {
    fs.writeFile(p, "[]", (error) => {
      if (error) console.log("Error : " + error);
      else console.log("File content deleted.");
    });
  }
};
