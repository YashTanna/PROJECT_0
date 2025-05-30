const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    student_id:{
        type : Number
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    arrival_date:{
        type: Date,
        required: true
    },
    purpose:{
        type: String,
        required: true
    },
    entry_time:{
        type: String,
    },
    entry_photo1:{
        type: String
    },
    entry_photo2:{
        type: String
    },
    entry_authorised_by:{
        type: String
    },
});

module.exports = mongoose.model('Parent_Transactional', parentSchema);