const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "../packer/vanilla-install/variables.json" });

module.exports = {
  mongoURI: process.env["database-development-connection"],
  nginxIP: process.env["nginx-web-server-ip"],
  mongodbIP: process.env["database-ip"],
  port: process.env.port,
  devLocalHost: "localhost"
};

console.log("ENV = DEVELOPMENT");