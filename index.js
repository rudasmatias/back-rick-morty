const server = require("./src/app");
const { conn } = require("./src/DB_connection");
const PORT = 3000;

conn.sync({ force: false });

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
