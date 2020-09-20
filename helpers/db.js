const config = require("config");
const mongo = require("mongoose");
const models = require("models");

const connection = mongo.connect(config.mongoDb.host, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: config.mongoDb.name,
  user: config.mongoDb.username,
  pass: config.mongoDb.password,
});

mongo.Promise = global.Promise;

module.exports = {
  Adjectif: models.adjectif,
  Adverbe: models.adverbe,
  Determinant: models.determinant,
  Infinitif: models.infinitif,
  Participe: models.participe,
  Preposition: models.preposition,
  Pronom: models.pronom,
  Substantif: models.substantif,
  Verbe: models.verbe,
  mongo: mongo,
  connection: connection,
};