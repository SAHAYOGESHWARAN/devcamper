const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv')

// load env vars
dotenv.config({ path: './config/config.env' });

//load models
const Bootcamp = require('./models/Bootcamp');

//connect to DB
mongoose.connect(process.env.MONGO_URI,{
useNewUrlParser: true,
useNewUrlIndex: true,
useFindAndModify:false,
useUnifiedTopology: true // This option is recommended
});

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync('${__dirname}/_data/bootcamps.json','utf-8'

));

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps);
        console.log('Data Imported...'.green.inverse);
        process.exit();
        } catch (error) {
            console.error(error);
            }
            process.exit();
            }