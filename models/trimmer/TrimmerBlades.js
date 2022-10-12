const mongoose = require("mongoose");

const TrimmerBladesSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  serial: {
    type: String,
    required: true,
  },
  registDate: {
    type: String,
  },

  date: {
    type: [String],
  },
  comment: {
    type: [String],
  },
  commentDate: {
    type: [String],
  },
});

module.exports =
  mongoose.models.TrimmerBlades ||
  mongoose.model("TrimmerBlades", TrimmerBladesSchema);
