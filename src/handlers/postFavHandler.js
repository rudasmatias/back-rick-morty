const postFav = require("../controllers/postFav");

module.exports = async (req, res) => {
  try {
    const allFavorites = await postFav(req.body);

    return allFavorites
      ? res.status(200).json(allFavorites)
      : res.status(403).send("Error: Mensaje personalizado en caso de error");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
