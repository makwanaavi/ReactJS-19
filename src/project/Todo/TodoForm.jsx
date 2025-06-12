import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [InputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(InputValue);
    setInputValue("");
  };

  return (
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
  );
}

export default TodoForm;
