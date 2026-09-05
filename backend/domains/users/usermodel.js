import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
export default mongoose.model("User", userschema);
