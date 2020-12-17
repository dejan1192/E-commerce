const mongoose  = require("mongoose");

const connectDB = async () => {

    try {
        
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    });
        console.log(`MongoDB connected to ${connection.connection.host}`.yellow.bold.inverse)

    } catch (error) {
        console.log(`Error: ${error.message.red.underline.bold}`);
        process.exit(1);
    }



};

module.exports = connectDB;