const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true, // Corrigido de 'require' para 'required'
  },
  check: {
    type: Boolean, // Corrigido de 'Bolean' para 'Boolean'
    required: true, // Corrigido de 'require' para 'required'
  },
  date: {
    type: Date,
    default: Date.now, // Removido os parênteses para passar a função
  },
});

module.exports = mongoose.model("Task", taskSchema);
