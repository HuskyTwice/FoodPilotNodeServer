import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false },
    subject: { type: String, required: true, unique: false },
    message: { type: String, required: true, unique: false }
}, { collection: "contacts" });

export default contactSchema;