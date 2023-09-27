const { User } = require("../DB_connection");

module.exports = async (data) => {
  const { email, password } = data;
  if (!email || !password) return res.status(400).send("Faltan datos");

  const user = await User.findOrCreate({
    where: {
      email,
      password,
    },
  });

  return user;
};
