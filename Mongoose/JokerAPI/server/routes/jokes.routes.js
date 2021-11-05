const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/random", JokesController.randomJoke);
    app.get("/api/jokes/:_id", JokesController.findOneJoke);
    app.post("/api/jokes/new", JokesController.createOneJoke);
    app.put("/api/jokes/update/:_id", JokesController.updateOneJoke);
    app.delete("/api/jokes/delete/:_id", JokesController.deleteOneJoke);
}