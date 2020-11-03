const express = require("express");
const mongoose = require("mongoose");
const app = express(); //can create routes now
const cors = require('cors')
// const bodyParser = require('body-parser')
require('dotenv').config()

//import routes
const postsRoute = require('./routes/posts')

//middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true,
    useUnifiedTopology: true
 },
  () => {
    console.log("connected to db");
  }
);

//Start listening
app.listen(3000);
