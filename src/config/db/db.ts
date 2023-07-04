import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), ".env") });

const url = process.env.Database_URL;

export default async function connectDatabase() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");

    // You can remove the ping command as it's not necessary in Mongoose
    // await mongoose.connection.db.command({ ping: 1 });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the application if unable to connect
  }
}
