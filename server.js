// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const addCategories = require("./routes/addCategories");
const fetchCategories = require("./routes/fetchCategories");
const deleteItem = require("./routes/deleteItem");
const addItems = require("./routes/addItems");
const filterByPrice = require("./routes/filterByPrice");
const addToFavourites = require("./routes/addFavourites");
const removeFromFavourites = require("./routes/removeFromFavourite");
const fetchFavourites = require("./routes/fetchFavourites");
const featuredItems = require("./routes/featuredItems");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.post('/addCategories', addCategories(db));
// Note: mount other resources here, using the same pattern above
app.get('/fetchCategories', fetchCategories(db));
app.delete('/deleteItem/:userId/:itemId', deleteItem(db));
app.post('/addItem', addItems(db));
app.get('/filterByPrice/:highToLow', filterByPrice(db));
app.get('/featuredItems', featuredItems(db));
app.post('/addToFavourites', addToFavourites(db));
app.delete('/removeFromFavourites', removeFromFavourites(db));
app.get('/fetchFavourites/:userId', fetchFavourites(db));

// Note: mount other resources here, using the same pattern above
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
