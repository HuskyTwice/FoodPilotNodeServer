import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("bookmarks", schema);
export default model;