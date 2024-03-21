import mongoose from "mongoose";

let isConnected = false; //connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo DB is already connected");
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt"
      });

      isConnected = true;

      console.log('MongoDB is connected');
    } catch (error) {
        console.log({"Error in connection - ":error})
    }
  }
};
