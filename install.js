require("rootpath")();

const colors = require("colors");
const db = require("helpers/db");
const installService = require("modules/install/services/install.service");

(async function main() {
  console.log("Installing collections");

  await installService.install("adjectifs", db.Adjectif)
    .then(() => console.log("Installation completed : adjectifs"))
    .catch(() => console.log(colors.red("Installation failed : adjectifs")));

  await installService.install("adverbes", db.Adverbe)
    .then(() => console.log("Installation completed : adverbes"))
    .catch(() => console.log(colors.red("Installation failed : adverbes")));
    
  await installService.install("determinants", db.Determinant)
    .then(() => console.log("Installation completed : determinants"))
    .catch(() => console.log(colors.red("Installation failed : determinants")));
    
  await installService.install("infinitifs", db.Infinitif)
    .then(() => console.log("Installation completed : infinitifs"))
    .catch(() => console.log(colors.red("Installation failed : infinitifs")));
    
  await installService.install("participes", db.Participe)
    .then(() => console.log("Installation completed : participes"))
    .catch(() => console.log(colors.red("Installation failed : participes")));
    
  await installService.install("prepositions", db.Preposition)
    .then(() => console.log("Installation completed : prepositions"))
    .catch(() => console.log(colors.red("Installation failed : prepositions")));
    
  await installService.install("pronoms", db.Pronom)
    .then(() => console.log("Installation completed : pronoms"))
    .catch(() => console.log(colors.red("Installation failed : pronoms")));
    
  await installService.install("substantifs", db.Substantif)
    .then(() => console.log("Installation completed : substantifs"))
    .catch(() => console.log(colors.red("Installation failed : substantifs")));
    
  await installService.install("verbes/conditionnel", db.Verbe, { temps: 0 })
    .then(() => console.log("Installation completed : verbes.conditionnel"))
    .catch(() => console.log(colors.red("Installation failed : verbes.conditionnel")));
    
  await installService.install("verbes/futur", db.Verbe, { temps: 1 })
    .then(() => console.log("Installation completed : verbes.futur"))
    .catch(() => console.log(colors.red("Installation failed : verbes.futur")));
    
  await installService.install("verbes/imparfait", db.Verbe, { temps: 2 })
    .then(() => console.log("Installation completed : verbes.imparfait"))
    .catch(() => console.log(colors.red("Installation failed : verbes.imparfait")));
    
  await installService.install("verbes/passe-simple", db.Verbe, { temps: 3 })
    .then(() => console.log("Installation completed : verbes.passeSimple"))
    .catch(() => console.log(colors.red("Installation failed : verbes.passeSimple")));
    
  await installService.install("verbes/present", db.Verbe, { temps: 4 })
    .then(() => console.log("Installation completed : verbes.present"))
    .catch(() => console.log(colors.red("Installation failed : verbes.present")));
    
  await installService.install("verbes/subjonctif", db.Verbe, { temps: 5 })
    .then(() => console.log("Installation completed : verbes.subjonctif"))
    .catch(() => console.log(colors.red("Installation failed : verbes.subjonctif")));
    
  await installService.install("verbes/subjonctif-passe", db.Verbe, { temps: 6 })
    .then(() => console.log("Installation completed : verbes.subjonctifPasse"))
    .catch(() => console.log(colors.red("Installation failed : verbes.subjonctifPasse")));

  installService.success
    ? console.log(colors.green("Installation completed"))
    : console.log(colors.yellow("Error(s) occured during installation"));

  db.mongo.disconnect();
})();
