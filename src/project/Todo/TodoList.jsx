import { FaRegCircleCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";

function TodoList({ data, checked, onhandleDeleteTodo, onhandleCheckTodo }) {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList "}>{data}</span>
      <button className="check-btn" onClick={() => onhandleCheckTodo(data)}>
        <FaRegCircleCheck />
      </button>
      <button className="delete-btn" onClick={() => onhandleDeleteTodo(data)}>
        <TiDeleteOutline />
      </button>
    </li>
  );
}

export default TodoList;
