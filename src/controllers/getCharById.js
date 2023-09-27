const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

module.exports = async (ids) => {
  const { data } = await axios(`${URL}${ids}`);

  const { id, name, gender, image, origin, species, status } = data;

  const character = {
    id: id,
    name: name,
    gender: gender,
    image: image,
    status: status,
    origin: origin.name,
    species: species,
  };

  return character;
};
