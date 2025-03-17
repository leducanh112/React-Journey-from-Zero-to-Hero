import { useDispatch, useSelector } from "react-redux";
import { completedTodo, undoTodo, deleteTodo } from "../../actions/todos";

function TodoList() {
  const todoList = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  const handleCompleted = (id) => {
    dispatch(completedTodo(id));
  };
  const handleUndo = (id) => {
    dispatch(undoTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  console.log(todoList);
  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((item) => (
            <div className="todo__item" key={item.id}>
              <li>
                <span
                  className={
                    "todo__content " +
                    (item.completed && "todo__content--completed")
                  }
                >
                  {item.content}
                </span>
                {item.completed ? (
                  <button onClick={() => handleUndo(item.id)}>U</button>
                ) : (
                  <button onClick={() => handleCompleted(item.id)}>V</button>
                )}
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  X
                </button>
              </li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
