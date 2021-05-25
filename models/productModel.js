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
        // console.log(typeof product === "undefined");
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

  //TODO make edit

  static deleteById(id, callback) {
    fs.readFile(p, (error, fileData) => {
      if (!error) {
        const data = JSON.parse(fileData);
        console.log(data);
        data.splice(id, 1);
        console.log(data);

        fs.writeFile(p, JSON.stringify(data), (error) => {
          console.log("Product deleted.");
          callback();
        });
      }
    });
  }
};
