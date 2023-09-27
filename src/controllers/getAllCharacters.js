const { Favorite } = require("../DB_connection");

module.exports = async () => {
  const characters = await Favorite.findAll();

  return characters;
};
