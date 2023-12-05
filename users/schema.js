import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    zipCode: String,
    phone: String,
    role: {
      type: String,
      enum: ["BUSINESS_OWNER", "ADMIN", "USER"],
      default: "USER" },
  },
  { collection: "users" });
export default userSchema;