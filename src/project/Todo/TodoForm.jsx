import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [InputValue, setInputValue] = useState({});

  const handleInput = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(InputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          autoComplete="off"
          value={InputValue.content}
          onChange={(event) => handleInput(event.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TodoForm;
