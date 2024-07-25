const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BMI = new Schema({
    weight: Number,
    height: Number,
    BMI: Number,
}, {timestamps : true})

module.exports = mongoose.model("BMI",BMI)