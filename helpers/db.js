const config = require("config");
const mongo = require("mongoose");

mongo.connect(config.mongoDb.host, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// // Connected handler
// mongo.connection.on("connected", function (err) {
//   console.log("Connected to mongo: " + config.mongoDb.host);
// });

// // Error handler
// mongo.connection.on("error", function (err) {
//   console.log(err);
// });

mongo.Promise = global.Promise;

module.exports = {
  Adjectif: require("models/adjectif.model"),
  Adverbe: require("models/adverbe.model"),
  Determinant: require("models/determinant.model"),
  Infinitif: require("models/infinitif.model"),
  Participe: require("models/participe.model"),
  Pronom: require("models/Pronom.model"),
  Substantif: require("models/substantif.model"),
  Verbe: require("models/verbe.model"),
  mongo: mongo,
};