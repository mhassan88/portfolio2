import mongoose, { Collection } from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  email: String,
  contactNo: String,
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
    default: Date.now(),
  }
},
Collection: "userModel");
