const mongoose = require("mongoose");
const { DB_URL } = require("../constants/DB_URL");
const db = async () => {
  try {
    console.log("db url is", DB_URL);
    const success = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error", error);
  }
};
module.exports = { db };
