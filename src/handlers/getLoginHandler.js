const login = require("../controllers/login");
module.exports = async (req, res) => {
  try {
    const access = await login(req.query);
    return res.status(200).send(access);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
