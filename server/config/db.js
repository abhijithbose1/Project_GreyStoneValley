const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        console.log(`database connected : ${connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB}
