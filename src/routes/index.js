const express = require("express");
const router = express.Router();

//En el index de routes, debo importar todos los handlers
const getCharByIdHanlder = require("../handlers/getCharByIdHandler");
const getAllCharactersHandler = require("../handlers/getAllCharactersHandler");
const deleteFavHandlder = require("../handlers/deleteFavHandler");
const postFavHandler = require("../handlers/postFavHandler");
const postUserHandler = require("../handlers/postUserHandler");
const getLoginHandler = require("../handlers/getLoginHandler");

//es un empaquetador de rutas
router.get("/allCharacter", getAllCharactersHandler);
router.get("/character/:id", getCharByIdHanlder);

router.delete("/fav/:id", deleteFavHandlder);
router.post("/fav", postFavHandler);
router.post("/login", postUserHandler);
router.get("/login", getLoginHandler);

module.exports = router;
