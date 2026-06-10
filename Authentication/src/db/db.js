const mongoose = require('mongoose');

async function connectDB() {
    try{ 
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with DB");
        
    }catch(err){
        console.error("DB connection error:", err);
    }
}

module.exports = connectDB;