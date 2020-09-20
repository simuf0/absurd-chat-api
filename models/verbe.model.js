const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
  temps: { type: Number, required: true },
  index: { type: Number, required: true },
});

schema
  .set("toJSON", { virtuals: true })
  .index({ value: 1 })
  .index({ temps: 1, index: 1 });

module.exports = mongo.model("verbe", schema);