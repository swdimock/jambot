const mongoose = require("mongoose");

const uri = process.env.MONGO_DB;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Connected!");
  },
  (err) => console.log("Error: ", err)
);
