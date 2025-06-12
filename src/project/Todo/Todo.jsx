import { useEffect, useState } from "react";

import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoData from "./TodoData";

function Todo() {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (InputValue) => {
    if (!InputValue) return;

    if (task.includes(InputValue)) return;

    setTask((prevTask) => [...prevTask, InputValue]);
  };

 

  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  const handleAllDelete = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
      </header>

    <TodoData/>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((curTask, index) => (
           <TodoList key={index} data={curTask} onhandleDeleteTodo={handleDeleteTodo}/>
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleAllDelete}>
          Clear All
        </button>
      </section>
    </section>
  );
}

export default Todo;
