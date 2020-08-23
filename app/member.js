// importin module "mongoose"
const mongoose = require("mongoose");

// importing schema class from mongoose
const Schema = mongoose.Schema;

// creating object and passing constraints or required fields to schema constructor
const MemberSchema = new Schema({
    name: String
})

// passing this schema into model to store in database
const Member = mongoose.model("member", memberSchema);

// export - if someone wants to use this file then can use by importing this file.
module.exports = Member;
