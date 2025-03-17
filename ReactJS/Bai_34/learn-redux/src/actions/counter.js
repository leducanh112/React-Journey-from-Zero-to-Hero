export const up = (number) => {
  return {
    type: "UP",
    number: number,
  };
};

export const down = () => {
  return {
    type: "DOWN",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
