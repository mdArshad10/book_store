import mongoose from "mongoose";
import { MONGO_URL } from "../constant.js";

export const dbConnect = async () => {
  try {
    const dbInstance = await mongoose.connect(`${MONGO_URL}/bookStore`);
    console.log(
      `the database is connected at port ${dbInstance.connection.port}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
