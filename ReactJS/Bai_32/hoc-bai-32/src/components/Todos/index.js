import { useEffect, useReducer, useRef } from "react";

const init = [
  {
    id: 1,
    content: "Hoc HTML",
  },
  {
    id: 2,
    content: "Hoc CSS",
  },
  {
    id: 3,
    content: "Hoc JS",
  },
  {
    id: 4,
    content: "Hoc React",
  },
];

const reducer = (state, action) => {
  //action CREATE, DELETE
  console.log(state, action);
  switch (action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: Date.now(),
          content: action.value,
        },
      ];
    case "DELETE":
      const newState = state.filter((todo) => todo.id !== action.id);
      return newState;
    default:
      return state;
  }
  return state;
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, init);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.inputTodo.value;
    if (value) {
      dispatch({
        type: "CREATE",
        value: value,
      });
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE",
      id: id,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} name="inputTodo"></input>
        <button>Add</button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              {item.content}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Todos;
