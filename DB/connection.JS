const mongoose = require("mongoose");

const URI =
  "mongodb+srv://asad12345:000@cluster1.5acau.mongodb.net/cluster1?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;
