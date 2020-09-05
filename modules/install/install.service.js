const db = require("helpers/db");

module.exports = {
  dropCollections,
  adjectifs,
  adverbes,
  determinants,
  infinitifs,
  participes,
  pronoms,
  substantifs,
  verbesConditionel,
  verbesFutur,
  verbesImparfait,
  verbesPasseSimple,
  verbesPresent,
  verbesSubjonctif,
  verbesSubjonctifPasse,
};

async function dropCollections() {
  await db.Adjectif.deleteMany();
  await db.Adverbe.deleteMany();
  await db.Determinant.deleteMany();
  await db.Infinitif.deleteMany();
  await db.Participe.deleteMany();
  await db.Pronom.deleteMany();
  await db.Substantif.deleteMany();
  await db.Verbe.deleteMany();
}

async function adjectifs() {
  for (let data of require("./dataset/adjectifs")) {
    let word = new db.Adjectif(data);
    await word.save();
  }
}

async function adverbes() {
  for (let data of require("./dataset/adverbes")) {
    let word = new db.Adverbe(data);
    await word.save();
  }
}

async function determinants() {
  for (let data of require("./dataset/determinants")) {
    let word = new db.Determinant(data);
    await word.save();
  }
}

async function infinitifs() {
  for (let data of require("./dataset/infinitifs")) {
    let word = new db.Infinitif(data);
    await word.save();
  }
}

async function participes() {
  for (let data of require("./dataset/participes")) {
    let word = new db.Participe(data);
    await word.save();
  }
}

async function pronoms() {
  for (let data of require("./dataset/pronoms")) {
    let word = new db.Pronom(data);
    await word.save();
  }
}

async function substantifs() {
  for (let data of require("./dataset/substantifs")) {
    let word = new db.Substantif(data);
    await word.save();
  }
}

async function verbesConditionel() {
  for (let data of require("./dataset/verbes/conditionel")) {
    let word = new db.Verbe(data);
    await word.save();
  }
}

async function verbesFutur() {
  for (let data of require("./dataset/verbes/futur")) {
    let word = new db.Verbe(data);
    await word.save();
  }
}

async function verbesImparfait() {
  for (let data of require("./dataset/verbes/imparfait")) {
    let word = new db.Verbe(data);
    await word.save();
  }
}

async function verbesPasseSimple() {
  for (let data of require("./dataset/verbes/passe-simple")) {
    let word = new db.Verbe(data);
    await word.save();
  }
}

async function verbesPresent() {
  for (let data of require("./dataset/verbes/present")) {
    let word = new db.Verbe(data);
    await word.save();
  }
}

async function verbesSubjonctif() {
  for (let data of require("./dataset/verbes/subjonctif")) {
    let word = new db.Verbe(data);
    await word.save();
  }
}

async function verbesSubjonctifPasse() {
  for (let data of require("./dataset/verbes/subjonctif-passe")) {
    let word = new db.Verbe(data);
    await word.save();
  }
}