const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Someting went wrong", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(rr => res.json({message: "Someting went wrong", error: err}));
};

module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{$sample: {size: 1}}])
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Someting went wrong", error: err}));
};

module.exports.createOneJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Someting went wrong", error: err}));
};

module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updateJoke => res.json({joke: updateJoke}))
        .catch(err => res.json({message: "Someting went wrong", error: err}));
};

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deleteJoke => res.json({joke: deleteJoke}))
        .catch(err => res.json({message: "Someting went wrong", error: err}));
};