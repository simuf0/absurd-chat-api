require("rootpath")();

const colors = require("colors");
const db = require("helpers/db");
const installService = require("modules/install/install.service");

(async function main() {

  console.log("Initializing collections");
  await installService.dropCollections();

  console.log("Installing collections.adjectifs");
  await installService.adjectifs();

  console.log("Installing collections.adverbes");
  await installService.adverbes();

  console.log("Installing collections.determinants");
  await installService.determinants();

  console.log("Installing collections.infinitifs");
  await installService.infinitifs();

  console.log("Installing collections.participes");
  await installService.participes();

  console.log("Installing collections.pronoms");
  await installService.pronoms();

  console.log("Installing collections.substantifs");
  await installService.substantifs();

  console.log("Installing collections.verbes.conditionel");
  await installService.verbesConditionel();

  console.log("Installing collections.verbes.futur");
  await installService.verbesFutur();

  console.log("Installing collections.verbes.imparfait");
  await installService.verbesImparfait();

  console.log("Installing collections.verbes.passe-simple");
  await installService.verbesPasseSimple();

  console.log("Installing collections.verbes.present");
  await installService.verbesPresent();

  console.log("Installing collections.verbes.subjonctif");
  await installService.verbesSubjonctif();

  console.log("Installing collections.verbes.subjonctif-passe");
  await installService.verbesSubjonctifPasse();

  console.log(colors.green("Installation complete"));
  db.mongo.disconnect();

})();
