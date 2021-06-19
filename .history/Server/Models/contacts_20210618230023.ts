/*    contacts.ts
      Name: Muhammad Hassan 
      ID: 301178235
      Date: 18 June 2021
      */

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
