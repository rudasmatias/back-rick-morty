const deleteFav = require("../controllers/deleteFav");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const allFavorites = await deleteFav(id);
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
