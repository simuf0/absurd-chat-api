require("rootpath")();

const colors = require("colors");
const db = require("helpers/db");
const installService = require("modules/install/services/install.service");

(async function main() {
  console.log("Deleting collections");
  await installService.uninstall();
  console.log(colors.green("Uninstallation completed"));
  db.mongo.disconnect();
})();
