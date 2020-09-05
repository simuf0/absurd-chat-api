const mongo = require("mongoose");

const schema = new mongo.Schema({
  value: { type: String, required: true },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongo.model("infinitif", schema);