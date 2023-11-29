import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("UserData", schema);
export default model;