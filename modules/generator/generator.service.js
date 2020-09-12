const db = require("helpers/db");
const random = require("helpers/random");

module.exports = {
  adjectif,
  adverbe,
  determinant,
  infinitif,
  participe,
  pronom,
  substantif,
  verbe,
  groupeNominal,
};

async function adjectif(params = {}) {
  const collection = await db.Adjectif.find(params);
  return random.oneOf(collection);
}

async function adverbe() {
  const collection = await db.Adverbe.find();
  return random.oneOf(collection);
}

async function determinant(params = {}) {
  if ([0, 1, 2, 3, 4].indexOf(parseInt(params.type)) !== -1 && params.nombre == 1) {
    delete params.genre;
  }
  const collection = await db.Determinant.find(params);
  return random.oneOf(collection);
}

async function infinitif() {
  const collection = await db.Infinitif.find();
  return random.oneOf(collection);
}

async function participe(params = {}) {
  const collection = await db.Participe.find(params);
  return random.oneOf(collection);
}

async function pronom(params = {}) {
  let collection;
  if ([7, 8].indexOf(parseInt(params.type)) !== -1 && params.nombre == 0 && !params.genre) {
    collection = await db.Pronom.find(params).exists("genre", false);;
  } else {
    collection = await db.Pronom.find(params);
  }
  return random.oneOf(collection);
}

async function substantif(params = {}) {
  const collection = await db.Substantif.find(params);
  return random.oneOf(collection);
}

async function verbe(params = {}) {
  const collection = await db.Verbe.find(params);
  return random.oneOf(collection);
}

async function groupeNominal(params = {}) {
  if (!params.genre) {
    params.genre = random.oneOf(2);
  }
  if (!params.nombre) {
    params.nombre = random.oneOf(2);
  }
  const group = new Array();
  // if (random.isOneOf(2)) {
    const determinantParams = Object.assign(params, {
      type: { $in: [0, 1] }
    });
    group.push(await determinant(params));
    console.log(params, group);
  // }
  // TODO: 1/2 déterminant (article indéfini, défini, partitif, démonstratif, possessif, indéfini, interrogatif-exclamatif)
}