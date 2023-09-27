const express = require("express");
const server = express();
const router = require("./routes/index");
const cors = require("cors");
const xmlParser = require("express-xml-bodyparser");
const morgan = require("morgan");

server.use(express.json());
server.use(xmlParser());
server.use(cors());
server.use(morgan("dev"));
//middleware de las cors, permite el acceso del front al back, permimiento el acceso a todas las rutas
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Este middleware analiza los datos enviados desde el front en formato json (convertidos previamente por ajax) y los parsea a objetos de javascript

//con este middleware, realizo el pasamanos de la modularización, enviando cada vez que reciba el path mencionado hacia router
server.use("/rickandmorty", router);

module.exports = server;
