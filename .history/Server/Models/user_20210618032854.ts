import mongoose, { Collection } from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: String,
    email: String,
    displayName: String,
    created: {
      type: Date,
      default: Date.now(),
    },
    updated: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "users",
  }
);
const Model = mongoose.model("User", UserSchema);
export default Model;
