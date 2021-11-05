const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
    .then(() => console.log("Connected to database"))
    .catch(err => console.log("Something went wrong", err));