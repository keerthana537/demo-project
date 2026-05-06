const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// temporary database
let tasks = [];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST add task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text
  };

  tasks.push(newTask);
  res.json(newTask);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});