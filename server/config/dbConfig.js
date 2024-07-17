const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL || 'mongodb+srv://mrinalbhattacharya:f3nBnwCYX9Sd9un1@cluster0.t4enktq.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0');

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection Successful");
});
connection.on("error", () => {
  console.log("Connection unsuccessful");
});

// done
