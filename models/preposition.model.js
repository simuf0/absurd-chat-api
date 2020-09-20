const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
  type: { type: Number, required: true },
});

schema
  .set("toJSON", { virtuals: true })
  .index({ value: 1, type: 1 });

module.exports = mongo.model("preposition", schema);