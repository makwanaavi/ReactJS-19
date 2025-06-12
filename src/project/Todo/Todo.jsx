import { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import "./Todo.css";

function Todo() {
  const [InputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!InputValue) return;

    if (task.includes(InputValue)) return;

    setTask((prevTask) => [...prevTask, InputValue]);

    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const formatedTime = now.toLocaleTimeString();
      setDateTime(`${formatedDate} - ${formatedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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

      <section className="date-time">
        <h2>{dateTime}</h2>
      </section>

      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new task..."
            autoComplete="off"
            value={InputValue}
            onChange={handleInput}
          />
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>

      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((curTask, index) => (
            <li className="todo-item" key={index}>
              <span className="notCheckList">{curTask}</span>
              <button className="check-btn">
                <FaRegCircleCheck />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(curTask)}
              >
                <TiDeleteOutline />
              </button>
            </li>
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
