import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;
const contact = new Schema(
  {
    contactName: String,
    phone: String,
    emailAddress: String,
  },
  {
    collection: "contacts",
  }
);
const Model = model("Contact", contact);
export default Model;
