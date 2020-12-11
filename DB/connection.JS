const mongoose = require("mongoose");

const URI =
  "mongodb+srv://asad12345:<password>@cluster1.5acau.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;
