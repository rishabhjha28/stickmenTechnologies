const mongoose = require('mongoose');

const tokenCountSchema = new mongoose.Schema({
    tokenCount: {
        type: Number,
    }
})

const tokenCountData = mongoose.model('TOKENCOUNT', tokenCountSchema);

module.exports = tokenCountData;