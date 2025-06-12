import { FaRegCircleCheck } from 'react-icons/fa6'
import { TiDeleteOutline } from 'react-icons/ti'

function TodoList({key, data, onhandleDeleteTodo}) {
  return (
    <li className="todo-item" key={key}>
              <span className="notCheckList">{data}</span>
              <button className="check-btn">
                <FaRegCircleCheck />
              </button>
              <button
                className="delete-btn"
                onClick={() => onhandleDeleteTodo(data)}
              >
                <TiDeleteOutline />
              </button>
            </li>
  )
}

export default TodoList
