const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
  type: { type: Number, required: true },
  genre: { type: Number },
  nombre: { type: Number },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongo.model("participe", schema);