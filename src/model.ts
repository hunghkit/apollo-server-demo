import mongoose from "mongoose";

const uri: string = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/apollo-server";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});
