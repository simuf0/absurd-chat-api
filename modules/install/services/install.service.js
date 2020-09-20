const db = require("helpers/db");

module.exports = {
  success: true,
  install,
  uninstall,
};

async function checksum(initialCount, model, filter = {}) {
  const count = await model.countDocuments(filter);
  return initialCount == count;
}

async function install(name, model, filter) {
  return new Promise(async (resolve, reject) => {
    const data = require(`../dataset/${name}`);
    const error = () => {
      module.exports.success = false;
      reject();
    };
    await model.collection.insertMany(data);
    await checksum(data.length, model, filter) ? resolve() : error();
  });
}

async function uninstall() {
  await Promise.all([
    db.Adjectif.collection.drop(),
    db.Adverbe.collection.drop(),
    db.Determinant.collection.drop(),
    db.Infinitif.collection.drop(),
    db.Participe.collection.drop(),
    db.Preposition.collection.drop(),
    db.Pronom.collection.drop(),
    db.Substantif.collection.drop(),
    db.Verbe.collection.drop(),
  ]);
}
