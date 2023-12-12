import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String }
}, { collection: "contacts" });

export default contactSchema;