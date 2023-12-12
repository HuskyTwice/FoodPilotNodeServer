import schema from "./schema";
import mongoose from "mongoose";
const model = mongoose.model("follows", schema);
export default model;