import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("restaurants", schema);
export default model;