const Task = require('../models/Task');

const getAllTasks = async (req, res) => { // Adicionado async
  try {
    const tasksList = await Task.find(); // Mantido o await
    return res.render("index", { tasksList }); // Corrigido para passar tasksList como objeto
  } catch (err) {
    return res.status(500).send({ error: err.message }); // Adicionado return para consistência
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/"); // Corrigido de res,redirect para res.redirect
  } catch (err) {
    return res.status(500).send({ error: err.message }); // Adicionado return para consistência
  }
};

module.exports = {
  getAllTasks,
  createTask,
};
