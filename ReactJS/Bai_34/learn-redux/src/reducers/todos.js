const init = [
  {
    id: 1,
    content: "CV 1",
    completed: false,
  },
  {
    id: 2,
    content: "CV 2",
    completed: false,
  },
  {
    id: 3,
    content: "CV 3",
    completed: false,
  },
];

const todosReducer = (state = init, action) => {
  console.log(state, action);
  let newState = [...state];

  switch (action.type) {
    case "CREATE_TODO":
      newState = [
        ...newState,
        {
          id: Date.now(),
          content: action.content,
          completed: false,
        },
      ];
      return newState;
    case "COMPLETED_TODO":
      const index = newState.findIndex((item) => {
        return item.id === action.id;
      });
      console.log(newState[index]);
      newState[index].completed = true;
      return newState;
    case "UNDO_TODO":
      const undoIndex = newState.findIndex((item) => {
        return item.id === action.id;
      });
      newState[undoIndex].completed = false;
      return newState;
    case "DELETE_TODO":
      newState = newState.filter((item) => {
        return item.id != action.id;
      });
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
