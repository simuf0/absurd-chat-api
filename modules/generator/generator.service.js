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
};

async function adjectif(params) {
  const collection = await db.Adjectif.find(params);
  return random.oneOf(collection);
}

async function adverbe() {
  const collection = await db.Adverbe.find();
  return random.oneOf(collection);
}

async function determinant(params) {
  const collection = await db.Determinant.find(params);
  return random.oneOf(collection);
}

async function infinitif(params) {
  const collection = await db.Infinitif.find(params);
  return random.oneOf(collection);
}

async function participe(params) {
  const collection = await db.Participe.find(params);
  return random.oneOf(collection);
}

async function pronom(params) {
  const collection = await db.Pronom.find(params);
  return random.oneOf(collection);
}

async function substantif(params) {
  const collection = await db.Substantif.find(params);
  return random.oneOf(collection);
}

async function verbe(params) {
  const collection = await db.Verbe.find(params);
  return random.oneOf(collection);
}