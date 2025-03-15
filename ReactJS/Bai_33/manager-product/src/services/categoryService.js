export const getListCategory = async () => {
  const response = await fetch("http://localhost:3000/categories");
  const result = await response.json();
  return result;
};
