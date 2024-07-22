const mongoose = require('mongoose');

const bootcamp = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength:[50,'name can not be more than 50 characters']
    }
    slug: String,

    description:{
        type: String,
        required: [true, 'Please add a description'],
        maxlength:[500,'Description can not be more than 500 characters']

    },
    website:{
        type: String,
        match:[
            /^((https?:\/\/)?(www\.)?)/,
        ]
    },


});