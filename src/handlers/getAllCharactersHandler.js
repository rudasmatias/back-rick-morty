const getAllCharacters = require("../controllers/getAllCharacters");

module.exports = async (req, res) => {
  try {
    const characters = await getAllCharacters();

    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
