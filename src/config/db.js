const mongoose = require("mongoose");

const uri =
  "mongodb+srv://root:9BNkk4GNwyx5dIrW@cluster0.wjivz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Connected!");
  },
  (err) => console.log("Error: ", err)
);
