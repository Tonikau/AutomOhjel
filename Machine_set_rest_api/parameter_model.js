const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        tool_name:{
            type: String,
            required: true
        },
        material: {
            type: String,
            required: true
        },
        cutting_speed: {
            type: Number,
            required: true,
        },
        feed_rate: {
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model("parameter", schema);