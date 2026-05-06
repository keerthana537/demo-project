exports.toggleTask = (req, res) => {
  tasks = tasks.map(task => {
    if (task.id == req.params.id) {
      task.completed = !task.completed;
    }

    return task;
  });

  res.json({ message: 'Task updated' });
};