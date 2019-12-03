const mongoose = require("mongoose");
const uri = require("./config").MongoURI;

module.exports = {
  start: function() {
    mongoose
      .connect(process.env.uri || uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
      .then(console.log("MongoDB connected successfully"))
      .catch(err => console.log(err));
    if (process.env.NODE_ENV === 'production'){

    }
  },
  connection: mongoose.connection
}
