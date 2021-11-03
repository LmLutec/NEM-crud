import React, { useState } from "react";
import "../styles/Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={task}
            placeholder="What needs to be done?"
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Due Date:
          <input
            type="text"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Todo;
