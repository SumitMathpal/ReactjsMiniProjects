import { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  function handleDateInputChange(e) {
    setNewDate(e.target.value);
  }

  function handleTextInputChange(e) {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== "" && newDate.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, { task: newTask, date: newDate }]);
      setNewTask("");
      setNewDate("");
    }
  };

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="Todo-list">
        <h1>To-Do List</h1>
        <div>
          <input
            type="date"
            className="Date-input"
            onChange={handleDateInputChange}
            value={newDate}
          />
          <input
            type="text"
            placeholder="Enter a task..."
            className="Task-input"
            onChange={handleTextInputChange}
            value={newTask}
          />
          <button className="Add-Task" onClick={addTask}>
            ADD
          </button>
        </div>
        <ol>
          {tasks.map((taskObj, index) => (
            <li key={index}>
              <span className="list">
                {taskObj.date} - {taskObj.task}
              </span>
              <button className="Delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="UpWord-btn" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button
                className="DownWord-btn"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Todolist;
