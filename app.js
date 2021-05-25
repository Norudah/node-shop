// third party node modules
const express = require("express");
const ejs = require("ejs");

// Personal node imports
const productsRouter = require("./routes/products");

const app = express();

// Enabling by default the req to receive data from post forms
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Using EJS tempalte engine et défine the root folder for the views
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/products", productsRouter);

app.get("/", (req, res, enxt) => res.render("index"));

// 404 behavior
app.use((req, res, next) => res.status(404).render("404"));

app.listen(3001);
