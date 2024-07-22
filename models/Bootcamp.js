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
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
        'please use a valid URL with http or HTTPS'
            ]]
    },
email:{
    type: String,
    match:[
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'please use a valid email'
    ]
},
address:{
    type: String,
    required:[true,'please add an address']
},

});