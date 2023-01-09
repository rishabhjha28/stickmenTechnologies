const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const adminData = mongoose.model('ADMIN', adminSchema);

module.exports = adminData;