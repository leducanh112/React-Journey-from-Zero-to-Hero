import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";

function Todo() {
  return (
    <>
      <div className="todo">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default Todo;
