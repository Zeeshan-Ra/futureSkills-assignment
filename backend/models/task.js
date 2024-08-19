const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    }
});

module.exports = mongoose.model("tasks", taskSchema);