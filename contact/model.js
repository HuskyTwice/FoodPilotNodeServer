import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("contacts", schema);
export default model;