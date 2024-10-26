// models/Weather.js
const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    condition: String,
    timestamp: Date,
});

const Weather = mongoose.model('Weather', WeatherSchema);
module.exports = Weather;
