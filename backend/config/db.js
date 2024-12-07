//backend/config/db.js
const mongoose = require("mongoose");

/*const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // serverSelectionTimeoutMS: 5000, // Optional: To handle DNS resolution timeouts
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};*/
/*mongoose.connect('mongodb://localhost:27017/signupdb', { useNewUrlParser: true, useUnifiedTopology: true , 
  serverSelectionTimeoutMS: 30000 })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
*/

module.exports = connectDB;