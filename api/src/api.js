const express = require("express");

const app = express();

const Tasks = [];
app.get("/", (req, res) => {
  return res.json(Tasks);
});
app.get("/tasks", (req, res) => {
  return res.json(Tasks);
});
app.get("/tasks/:id", (req, res) => {
  const task = Tasks.find((task) => task._id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  return res.json(task);
});

app.listen(3000, () => {
  console.log("app runnig on http//:localhost:3000");
});
