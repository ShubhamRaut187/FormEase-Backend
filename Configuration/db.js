const mongoose = require('mongoose');

// Connection to database using mongoose.
const connection = mongoose.connect(process.env.MONGODB);

module.exports = {
    connection
}