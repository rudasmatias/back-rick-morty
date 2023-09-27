const { Favorite } = require("../DB_connection");

module.exports = async (id) => {
  //await Favorit.destroy() --> asi solo eliminamos toda la base de datos!!

  await Favorite.destroy({
    where: {
      id,
    },
  });

  const allFavorites = await Favorite.findAll();

  return allFavorites;
};
