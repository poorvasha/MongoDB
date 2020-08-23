// importing module "mongoose"
const mongoose = require("mongoose");

// Connecting to mongoDB
mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser : true})

// checking connection
mongoose.connection
    // eventEmitters, .once-> calls at once (intialization)
    .once("open", () => console.log("connected"))
    
    // .on -> full listner
    .on("error", error => {
        console.log("Error Name", error);
    });