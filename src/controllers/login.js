const { User } = require("../DB_connection");

module.exports = async (credential) => {
  const { email, password } = credential;
  if (!email || !password) return new Error("Faltan datos");
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) return new Error("Usuario no encontrado");

  return user.password === password && { access: true };
};
