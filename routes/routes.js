const routes = require("express").Router()
const TaskerController = require("../controller/TaskController")
routes.get("/", TaskerController.getAllTasks)
routes.post("/create", TaskerController.createTask)

module.exports = routes