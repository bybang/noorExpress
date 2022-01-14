// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');
var cookieSession = require('cookie-session')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(cookieSession({
  name: 'session',
  keys: ["password"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

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

const markSold = require("./routes/markSold");

const addCategories = require("./routes/addCategories");
const fetchCategories = require("./routes/fetchCategories");
const deleteItem = require("./routes/deleteItem");
const addItems = require("./routes/addItems");
const filterByPrice = require("./routes/filterByPrice");
const addToFavourites = require("./routes/addFavourites");
const removeFromFavourites = require("./routes/removeFromFavourite");
const fetchFavourites = require("./routes/fetchFavourites");
const featuredItems = require("./routes/featuredItems");

const messages = require("./routes/messages");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));

app.patch('/markAsSold/:itemId', markSold(db));

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

// app.get("/messages", getMessages(db));
// app.post("/messages", createMessage(db));
// Note: mount other resources here, using the same pattern above
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const userId = req.session.user_id;
  const templateVars = {};
  db.query(`SELECT * FROM users WHERE id = $1;`, [userId])
  .then(data => {
    templateVars.user = data.rows[0];
    res.render("index", templateVars);
  })
});

app.get('/login/:id', (req, res) => {
  // cookie-session middleware
  req.session.user_id = req.params.id;

  // send the user somewhere
  res.redirect('/');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.get("/chat", (req, res) => {
  const userId = req.session.user_id;
  const templateVars = {};
  db.query(`SELECT * FROM users WHERE id = $1;`, [userId])
  .then(async data => {
    const convoResult = await db.query(`SELECT * FROM items JOIN conversations ON items.id = conversations.item_id JOIN messages ON conversations.id = messages.conversation_id WHERE items.user_id = $1`, [userId])
    const convos = convoResult.rows.reduce((acc, msg) => {
      if (!acc[msg.conversation_id]) {
        acc[msg.conversation_id] = [];
      }
      acc[msg.conversation_id].push(msg);
      return acc
    }, {});
    console.log(convos)
    templateVars.user = data.rows[0];
    templateVars.convos = convos
    res.render("chat", templateVars);
  })
});

app.get("/messages", (req, res) => {
  const userId = req.session.user_id;
  db.query(`SELECT * FROM users WHERE id = $1;`, [userId])
  .then(async data => {
    const convoResult = await db.query(`SELECT * FROM items JOIN conversations ON items.id = conversations.item_id JOIN messages ON conversations.id = messages.conversation_id WHERE items.user_id = $1`, [userId])
    const convos = convoResult.rows.reduce((acc, msg) => {
      if (!acc[msg.conversation_id]) {
        acc[msg.conversation_id] = [];
      }
      acc[msg.conversation_id].push(msg);
      return acc
    }, {});

    res.json(convos);
  })
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
