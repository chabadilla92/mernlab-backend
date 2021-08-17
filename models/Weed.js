const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const weedSchema = new Schema(
    {
        name: String,
        img: String,
        strain: String
    },
    {timestamps: true}
);

const Weed = model("Weed", weedSchema);

module.exports = Weed;