import mongoose from "mongoose";

const Connection = async (username, password) => {
  try {
    const URL = `mongodb+srv://${username}:${password}@cluster0.7f8lofq.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connected successfully");
  } catch (error) {
    console.log("Error While Connecting With The Database", error);
  }
};

export default Connection;
