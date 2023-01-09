const mongoose = require('mongoose');
const currentDate =()=>{
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();

    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    return maxDate
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Why No Name']
    },
    mobileNo: {
        type: Array,
        required: true
    },
    token: {
        type: Array,
    },
    date:{
        type:String,
        default: currentDate
    }
})

const userData = mongoose.model('USER', userSchema);

module.exports = userData;