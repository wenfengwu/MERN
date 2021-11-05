const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "set up is required"],
        minlength: [10, "setup is at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchiline is required"],
        minlength:[3, "punchline is at least 3 characters long"]
    },
},
    {timestamps: true}    
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;