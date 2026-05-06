let tasks = require('../data/tasks');

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const task = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
    priority: req.body.priority || 'Low'
  };

  tasks.push(task);
  res.json(task);
};

exports.deleteTask = (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json({ message: 'Task deleted' });
};

exports.toggleTask = (req, res) => {
  tasks = tasks.map(task => {
    if (task.id == req.params.id) {
      task.completed = !task.completed;
    }

    return task;
  });

  res.json({ message: 'Task updated' });
};