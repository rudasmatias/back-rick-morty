const { Favorite } = require("../DB_connection");

module.exports = async (character) => {
  const { id, name, image, gender } = character;

  if (!id || !name || !image || !gender) {
    return new Error("Faltan datos");
  }

  await Favorite.findOrCreate({
    where: {
      id,
      name,
      image,
      gender,
    },
  });

  const allFavorites = await Favorite.findAll();
  return allFavorites;
};
