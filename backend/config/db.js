import "dotenv/config";
import mongoose from "mongoose";

const { URL } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("conectado ao BD");
  } catch (error) {
    console.log("erro ao conectar ", error.message);
  }
};

export default connectDB;
