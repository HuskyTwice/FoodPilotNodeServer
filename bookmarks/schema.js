import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        restaurantId: String,
        restaurantName: String
    },
    { collections: "bookmarks"}
);

export default schema;