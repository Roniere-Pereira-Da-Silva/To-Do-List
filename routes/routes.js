const routes = require("express").Router()
const TaskerController = require("../controller/TaskController")
routes.get("/home", TaskerController.getAll)

module.exports = routes