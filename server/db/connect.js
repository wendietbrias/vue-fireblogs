const mongoose = require("mongoose");

const connectDB = async (app) => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URI}`);
    if (connect) {
      app.listen(process.env.PORT, () => console.log(`running`));
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = connectDB;
