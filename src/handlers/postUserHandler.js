const postUser = require("../controllers/postUser");

module.exports = async (req, res) => {
  try {
    const user = await postUser(req.body);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
