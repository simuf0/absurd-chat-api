const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
  temps: { type: Number, required: true },
  index: { type: Number, required: true },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongo.model("verbe", schema);