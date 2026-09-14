import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Complete React basics",
      completed: false,
    },
    {
      id: 2,
      title: "Build MERN Project",
      description: "Create Task Manager",
      completed: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Task Manager</h1>
        <p className="subtitle">Manage your tasks easily</p>

        {/* Add Task */}
        <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Add Task</button>
        </form>

        {/* Task List */}
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty">No tasks available</p>
          ) : (
            tasks.map((task) => (
              <div
                className={`task-card ${
                  task.completed ? "completed" : ""
                }`}
                key={task.id}
              >
                <div className="task-info">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>

                <div className="actions">
                  <button onClick={() => toggleTask(task.id)}>
                    {task.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;