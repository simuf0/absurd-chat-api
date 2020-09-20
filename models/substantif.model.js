const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
  genre: { type: Number, required: true },
  nombre: { type: Number, required: true },
});

schema
  .set("toJSON", { virtuals: true })
  .index({ value: 1 })
  .index({ genre: 1, nombre: 1 });

module.exports = mongo.model("substantif", schema);