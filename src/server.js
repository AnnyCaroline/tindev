const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

// cria uma porta de entrada p/ o nosso server
const server = express();

mongoose.connect(
  "mongodb+srv://<user>:<password>@cluster0-8mfvh.mongodb.net/omnistack8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
