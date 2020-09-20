const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
});

schema
  .set("toJSON", { virtuals: true })
  .index({ value: 1 });

module.exports = mongo.model("adverbe", schema);