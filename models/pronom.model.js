const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
  type: { type: Number, required: true },
  genre: { type: Number },
  nombre: { type: Number },
  index: { type: Number },
  fonction: { type: Number },
});

schema
  .set("toJSON", { virtuals: true })
  .index({ value: 1 })
  .index({ type: 1 })
  .index({ type: 1, index: 1 })
  .index({ type: 1, genre: 1, nombre: 1 })
  .index({ type: 1, genre: 1, nombre: 1, index: 1 });

module.exports = mongo.model("pronom", schema);