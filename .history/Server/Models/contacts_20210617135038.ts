import { model, Mongoose } from "mongoose";
const Schema = Mongoose.Schema;
const contact = new Schema(
  {
    firstName: String,
    lastName: String,
    emailAddress: String,
  },
  {
    collection: "contacts",
  }
);
const Model = model("Contact", contact);
export default Model;
