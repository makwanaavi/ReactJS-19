import { useState } from "react";

import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoData from "./TodoData";

function Todo() {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (InputValue) => {
    const { id, content, checked } = InputValue;

    if (!content) return;

    // if (task.includes(InputValue)) return;

    const ifTodoContentMatch = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatch) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content === value);
    setTask(updatedTask);
  };

  const handleAllDelete = () => {
    setTask([]);
  };

  const handleCheckTodo = (content) =>{
    const updatedTask = task.map((curTask) =>{
      if (curTask.content === content ) {
        return {...curTask, checked: !curTask.checked}
      }else{
        return curTask ;
      }
    }) ; 
    setTask(updatedTask)
   } 

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
      </header>

      <TodoData />

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked = {curTask.checked}
                onhandleDeleteTodo={handleDeleteTodo}
                onhandleCheckTodo={handleCheckTodo}
              />
            );
          })}
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
