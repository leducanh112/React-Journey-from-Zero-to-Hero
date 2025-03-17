const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "UP":
      state += action.number;
      break;
    case "DOWN":
      state--;
      break;
    case "RESET":
      state = 0;
      break;
    default:
      return state;
  }
  return state;
};

export default counterReducer;
