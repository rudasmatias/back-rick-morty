const getCharById = require("../controllers/getCharById");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await getCharById(id);
    return character
      ? res.status(200).json(character)
      : res.status(404).send("Character not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
