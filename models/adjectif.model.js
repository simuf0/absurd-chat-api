const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
  genre: { type: Number, required: true },
  nombre: { type: Number, required: true },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongo.model("adjectif", schema);