const express = require("express");
// const knex = require("./database");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ProjectController = require("./controllers/ProjectController");

routes.get("/", (request, response) => {
    return response.json({ message: "Hello World Knex" });
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.create);

module.exports = routes;
